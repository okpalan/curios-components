import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import  terser  from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';

// Define input and output directories based on your structure
const inputDir = path.resolve(process.cwd(), 'src');
const outputDir = path.resolve(process.cwd(), 'dist');
const umdDir = path.join(outputDir, 'umd/draft-components');

// Define the pattern to find PascalCase components
const componentPattern = '**/[A-Z]*.js';
/**
 * Function to find all PascalCase component files in the input directory.
 * @returns {string[]} Array of component file paths.
 * @throws Will throw an error if no components are found.
 */
const findComponents = () => {
  const allComponents = glob.sync('**/index.js', { cwd: inputDir, nodir: true, absolute: true });

  const components = allComponents.filter(file => {
    const componentName = path.basename(path.dirname(file)); // Extract component name from directory
    return /^[A-Z][a-zA-Z0-9]*$/.test(componentName); // Ensure PascalCase
  });

  if (components.length === 0) {
    throw new Error(`No components found in src directory (${inputDir}). Ensure it contains 'index.js' files in subdirectories.`);
  }

  return components;
};

// Create a Rollup configuration for each component
const createConfig = (component) => {
  const componentName = path.basename(path.dirname(component)); // Get the component folder name

  return {
    input: component,
    output: [
      {
        file: path.join(outputDir, componentName, `${componentName}.cjs.js`),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: path.join(outputDir, componentName, `${componentName}.esm.js`),
        format: 'esm',
        sourcemap: true,
      },
      {
        file: path.join(umdDir, `${componentName}.umd.js`),
        format: 'umd',
        name: componentName,
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env'],
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
      }),
      postcss({
        extensions: ['.scss', '.css'],
        extract: path.join(outputDir, componentName, `${componentName}.css`), // Extract CSS for each component
        minimize: true, // Minimize the CSS output
      }),
      terser(), // Minify JS output
      copy({
        targets: [{ src: 'src/assets/*', dest: path.join(outputDir, 'assets') }],
        verbose: true,
        hook: 'writeBundle',
      }),
    ],
    external: [], // Define external dependencies if necessary
    onwarn: (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY') {
        return;
      }
      console.warn(`(!) ${warning.message}`);
    },
  };
};

// Find components and create Rollup configurations
const components = findComponents();
const configs = components.map(createConfig);

// Log the configs for debugging
console.log(configs);

// Ensure the export is an array of configurations
export default configs;
