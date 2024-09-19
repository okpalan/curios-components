import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy'; 
const inputDir = 'src/';
const outputDir = 'dist';
const umdDir = path.join(outputDir, 'umd/draft-components');

// List all JavaScript files in the src directory
const components = fs.readdirSync(inputDir).filter(file => file.endsWith('.js') || file === 'index.js');

// Create a Rollup config for each component
const createConfig = (component) => ([{
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
            file: path.join(umdDir, component.replace('.js', '.umd.js')),
            format: 'umd',
            name: 'DraftComponents',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        copy({
            targets: [
                { src: 'src/assets/*', dest: 'dist/assets' },
            ],
            verbose: true, // Optional: Log each copy operation
            hook: 'writeBundle', // Copy after bundle is created
        }),
        terser()
    ]
}]);

// Export an array of configurations
export default components.flatMap(createConfig);
