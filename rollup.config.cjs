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

// Import registerComponents from the utils module
const { registerComponents } = require('./utils/index.cjs');

// Define input and output directories
const inputDir = path.resolve(process.cwd(), 'src');
const outputDir = path.resolve(process.cwd(), 'dist');
const umdDir = path.join(outputDir, 'umd/draft-components');

// Create Rollup configuration for each component
const createConfig = (component) => {
  const componentName = path.basename(path.dirname(component));

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
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
      }),
      postcss({
        extensions: ['.scss', '.css'], // Handle SCSS and CSS
        extract: path.join(outputDir, componentName, `${componentName}.css`), // Extract CSS for each component
        minimize: true,
        use: [
          ['sass', { includePaths: [path.resolve(__dirname, 'src', 'styles')] }],
        ],
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

// Find components and create Rollup configurations using the registerComponents function
const components = registerComponents(inputDir);
const configs = components.map(createConfig);

// Ensure the export is an array of configurations
module.exports = configs;
