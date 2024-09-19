import fs from 'fs';
import path from 'path';
import terser from '@rollup/plugin-terser'; 
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy'; // New plugin for copying assets

const inputDir = 'src/';
const outputDir = 'dist';
const umdDir = path.join(outputDir, 'umd');
const esmDir = path.join(outputDir, 'esm');
const cjsDir = path.join(outputDir, 'cjs');
const cssDir = path.join(outputDir, 'css');

// List all JavaScript files in the src directory
const components = fs.readdirSync(inputDir).filter(file => file.endsWith('.js') || file === 'index.js');

console.log('Components:', components); // Debugging line

// Create a Rollup config for each component
const createConfig = (component) => {
  const baseName = component.replace('.js', '');

  return [
    {
      input: path.join(inputDir, component),
      output: [
        {
          file: path.join(cjsDir, `draft-components.cjs.js`),
          format: 'cjs',
          sourcemap: true
        },
        {
          file: path.join(esmDir, `draft-components.esm.js`),
          format: 'esm',
          sourcemap: true
        },
        {
          file: path.join(umdDir, `draft-components.umd.js`),
          format: 'umd',
          name: 'DraftComponents', // Adjust the name as necessary
          sourcemap: true
        }
      ],
      plugins: [
        postcss({
          extract: path.join(cssDir, `${baseName}.css`), // Extract CSS to dist/css
          minimize: true, // Minify CSS
          use: [
            ['sass', {
              includePaths: ['src/styles'] // Adjust if your SCSS files are in a different directory
            }]
          ]
        }),
        resolve(),
        commonjs(),
        terser(), // Call Terser as a function
        copy({
          targets: [
            {
              src: path.join(inputDir, baseName, 'assets/**/*'), // Adjust if your assets are in a different path
              dest: path.join(outputDir, baseName, 'assets')
            }
          ],
          verbose: true, // Show which files are being copied
          hook: 'buildEnd' // Run after the build process
        })
      ]
    }
  ];
};

// Export an array of configurations
export default components.flatMap(createConfig);
