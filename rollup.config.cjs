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
const packageJSON = require('./package.json');

// Import registerComponents from the utils module
const { registerComponents } = require('./utils/index.cjs');

// Define environment
const isProduction = process.env.NODE_ENV === 'production';

// Define input and output directories
const inputDir = path.resolve(process.cwd(), 'src');
const outputDir = path.resolve(process.cwd(), 'dist');
const umdDir = path.join(outputDir, 'umd');

// Create Rollup configuration for each component
const createConfig = (componentDir) => {
  const componentName = path.basename(componentDir);
  const outputComponentDir = path.join(outputDir, componentName);
  
  // Check for index.js file in the component directory
  const inputFilePath = path.join(componentDir, 'index.js');
  if (!fs.existsSync(inputFilePath)) {
    console.warn(`Skipping ${componentName} due to missing entry file (index.js).`);
    return null;
  }

  // Create necessary output directories
  ['cjs', 'esm'].forEach((subDir) => {
    fs.mkdirSync(path.join(outputComponentDir, subDir), { recursive: true });
  });
  fs.mkdirSync(path.join(umdDir, componentName), { recursive: true });

  return {
    input: inputFilePath,
    external: (id) => /^@babel\/runtime/.test(id) || id.includes('node_modules'),
    output: [
      {
        file: path.join(outputComponentDir, 'cjs', `${componentName}.cjs.js`),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: path.join(outputComponentDir, 'esm', `${componentName}.esm.js`),
        format: 'esm',
        sourcemap: true,
      },
      {
        file: path.join(umdDir, componentName, `${componentName}.umd.js`),
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
          { find: '@', replacement: path.resolve(inputDir) },
        ],
      }),
      postcss({
        extensions: ['.scss', '.css'],
        extract: path.join(outputComponentDir, `${componentName}.css`),
        minimize: true,
        use: [
          ['sass', { includePaths: [path.resolve(__dirname, 'src', 'styles')] }],
        ],
      }),
      copy({
        targets: [
          { src: 'src/assets/*', dest: path.join(outputDir, 'assets') },
        ],
        verbose: false,
        hook: 'writeBundle',
      }),
      isProduction && terser(),
    ].filter(Boolean),
    onwarn: (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY') return;
      console.warn(`(!) ${warning.message}`);
    },
  };
};

// Find components and create Rollup configurations
const components = registerComponents(inputDir);
const configs = components
  .map(createConfig)
  .filter(Boolean); // Filter out null configurations (skipped components)

// Ensure the export is an array of configurations
module.exports = configs;
