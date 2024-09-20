const babel = require('@rollup/plugin-babel');

module.exports = {
  presets: [
    ["@babel/preset-env", { modules: "auto" }], // Use "false" for ESM
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
        }),
      ],
    },
  },
  retainLines: true,
  compact: false,
};
