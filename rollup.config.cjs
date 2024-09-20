const fs = require('fs');
const path = require('path');
const glob = require('glob');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel').default;
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');
const terser = require('@rollup/plugin-terser');
const alias = require('@rollup/plugin-alias');

// Define input and output directories based on your structure
const inputDir = path.resolve(process.cwd(), 'src');
const outputDir = path.resolve(process.cwd(), 'dist');
const umdDir = path.join(outputDir, 'umd/draft-components');

// Define the pattern to find PascalCase components
const componentPattern = '**/[A-Z]*/**/*.js';

/**
 * Function to find all PascalCase component files in the input directory.
 * @returns {string[]} Array of component file paths.
 * @throws Will throw an error if no components are found.
 */
const findComponents = () => {
  // Use glob to find all 'index.js' files in the input directory
  const allComponents = glob.sync('**/index.js', { cwd: inputDir, nodir: true, absolute: true });

  // Filter the found files to ensure they are within PascalCase directories
  const components = allComponents.filter(file => {
    const componentName = path.basename(path.dirname(file)); // Extract component name from the directory name
    return /^[A-Z][a-zA-Z0-9]*$/.test(componentName); // Ensure the directory follows PascalCase naming
  });

  // Throw an error if no components are found
  if (components.length === 0) {
    throw new Error(`No components found in src directory (${inputDir}). Ensure it contains 'index.js' files in PascalCase subdirectories.`);
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
module.exports = configs;
