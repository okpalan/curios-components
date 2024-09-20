import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import  terser  from '@rollup/plugin-terser';

// Define input and output directories
const inputDir = path.resolve(process.cwd(), 'src');
const outputDir = path.resolve(process.cwd(), 'dist');
const umdDir = path.join(outputDir, 'umd/draft-components');

/**
 * Function to find all PascalCase component files in the input directory.
 * @returns {string[]} Array of component file paths.
 * @throws Will throw an error if no components are found.
 */
const findComponents = () => {
  const componentPattern = '**/[A-Z]*/*.js'; // Matches any directory with PascalCase names
  const allComponents = glob.sync(componentPattern, { cwd: inputDir });
  const components = allComponents.filter(file => /^[A-Z][a-zA-Z0-9]*\/.*\.js$/.test(file));

  if (components.length === 0) {
    throw new Error(`No components found in src directory (${inputDir}). Ensure it contains .js files.`);
  }

  return components;
};

// Create a Rollup configuration for each component
const createConfig = (component) => ({
  input: path.join(inputDir, component),
  output: [
    {
      file: path.join(outputDir, component.replace('.js', '.cjs.js')),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.join(outputDir, component.replace('.js', '.esm.js')),
      format: 'esm',
      sourcemap: true,
    },
    {
      file: path.join(umdDir, component.replace('.js', '.umd.js')),
      format: 'umd',
      name: 'DraftComponents',
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
    copy({
      targets: [{ src: 'src/assets/*', dest: 'dist/assets' }],
      verbose: true,
      hook: 'writeBundle',
    }),
    postcss({
      extensions: ['.scss', '.css'],
      extract: true,
      minimize: true,
    }),
    terser(),
  ],
  external: [],
  onwarn: (warning) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    console.warn(`(!) ${warning.message}`);
  },
  preserveEntrySignatures: 'strict',
});

// Find components and create Rollup configurations
const components = findComponents();
const configs = components.map(createConfig);

// Log the configs for debugging
console.log(configs);

// Ensure the export is an array of configurations
export default configs;
