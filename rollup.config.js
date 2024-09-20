import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { visualizer } from 'rollup-plugin-visualizer';

// Ensure valid directory paths
const inputDir = path.resolve('src/');
const outputDir = path.resolve('dist');
const umdDir = path.join(outputDir, 'umd/draft-components');

// Read all components from the input directory
const components = fs
  .readdirSync(inputDir)
  .filter((file) => file.endsWith('.js') || file === 'index.js');

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
  external: [], // Add any external dependencies here if needed
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

// Ensure there is at least one valid configuration in the configs array
if (configs.length === 0) {
  throw new Error('No components found in src directory.');
}

// Log the configs for debugging (optional)
console.log(configs);

// Export the array of Rollup configurations
export default configs;
