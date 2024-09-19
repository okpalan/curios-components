import fs from 'fs';
import path from 'path';
import terser from '@rollup/plugin-terser'; 
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const inputDir = 'src/';
const outputDir = 'dist';
const umdDir = path.join(outputDir, 'umd/draft-components');

// List all JavaScript files in the src directory
const components = fs.readdirSync(inputDir).filter(file => file.endsWith('.js') || file === 'index.js');

console.log('Components:', components); // Debugging line

// Create a Rollup config for each component
const createConfig = (component) => ([ 
  {
    input: path.join(inputDir, component),
    output: [
      {
        file: path.join(outputDir, component.replace('.js', '.cjs.js')),
        format: 'cjs',
        sourcemap: true
      },
      {
        file: path.join(outputDir, component.replace('.js', '.esm.js')),
        format: 'esm',
        sourcemap: true
      },
      {
        file: path.join(outputDir, component.replace('.js', '.amd.js')),
        format: 'amd',
        name: 'DraftComponents', // Adjust the name as necessary
        sourcemap: true
      },
      {
        file: path.join(umdDir, component.replace('.js', '.umd.js')),
        format: 'umd',
        name: 'DraftComponents', // Adjust the name as necessary
        sourcemap: true
      }
    ],
    plugins: [
      postcss({
        extract: true, // Extract CSS to a separate file
        minimize: true, // Minify CSS
        use: [
          ['sass', {
            includePaths: ['src/styles'] 
          }
        ]
    ]
  }),
      resolve(),
      commonjs(),
      terser() // Call Terser as a function
    ]
  }
]);

// Export an array of configurations
export default components.flatMap(createConfig);
