import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { visualizer } from 'rollup-plugin-visualizer';
import glob from 'glob';  // Import the glob package

const inputDir = path.resolve(__dirname, 'src');
const outputDir = path.resolve(__dirname, 'dist');
const umdDir = path.join(outputDir, 'umd/draft-components');

// Use glob to get all JavaScript files in the src directory and subdirectories
const components = glob.sync('**/*.js', { cwd: inputDir });

if (components.length === 0) {
  throw new Error(`No components found in src directory (${inputDir}). Ensure it contains .js files.`);
}

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
    visualizer({
      open: true,
      filename: 'bundle-stats.html',
    }),
  ],
  external: [],
  onwarn: (warning) => {
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      return;
    }
    console.warn(`(!) ${warning.message}`);
  },
  preserveEntrySignatures: 'strict',
  preserveModules: true,
  preserveModulesRoot: inputDir,
});

// Store the configurations in a variable
const configs = components.map(createConfig);

// Log the configs for debugging
console.log(configs);

// Ensure the export is an array of configurations
export default configs;
