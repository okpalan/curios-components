import fs from "fs";
import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss"; // Corrected import for postcss
import { terser } from "rollup-plugin-terser"; // Ensure proper import for terser
import visualizer from "rollup-plugin-visualizer"; // Optional: Visualize bundle size

const inputDir = "src/";
const outputDir = "dist";
const umdDir = path.join(outputDir, "umd/draft-components");

// List all JavaScript files in the src directory
const components = fs
  .readdirSync(inputDir)
  .filter((file) => file.endsWith(".js") || file === "index.js");

// Create a Rollup config for each component
const createConfig = (component) => [
  {
    input: path.join(inputDir, component),
    output: [
      {
        file: path.join(outputDir, component.replace(".js", ".cjs.js")),
        format: "cjs",
        sourcemap: true,
      },
      {
        file: path.join(outputDir, component.replace(".js", ".esm.js")),
        format: "esm",
        sourcemap: true,
      },
      {
        file: path.join(umdDir, component.replace(".js", ".umd.js")),
        format: "umd",
        name: "DraftComponents",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        extensions: [".js"],
      }),
      copy({
        targets: [{ src: "src/assets/*", dest: "dist/assets" }],
        verbose: true, // Optional: Log each copy operation
        hook: "writeBundle", // Copy after bundle is created
      }),
      postcss({
        extensions: [".scss", ".css"],
        extract: true, // Extracts CSS into separate files
        minimize: true, // Minifies the output CSS
        use: [
          [
            "sass",
            {
              includePaths: ["./src/styles"], // Path to your styles
            },
          ],
        ],
      }),
      terser(),
      visualizer({ 
        open: true, // Automatically open the visualizer
        filename: 'bundle-stats.html' // Output file for stats
      }),
    ],
  },
];

// Export an array of configurations
export default components.flatMap(createConfig);
