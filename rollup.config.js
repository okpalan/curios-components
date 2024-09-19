import fs from 'fs';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const inputDir = 'src/';
const outputDir = 'dist';

// List all JavaScript files in the src directory
const components = fs.readdirSync(inputDir).filter(file => file.endsWith('.js') || file === 'index.js');

console.log('Components:', components); // Debugging line

// Create a Rollup config for each component
const createConfig = (component) => ({
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
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
});

// Export an array of configurations
export default components.map(createConfig);
