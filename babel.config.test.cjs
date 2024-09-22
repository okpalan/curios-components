const babel = require('@rollup/plugin-babel');

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ],
  retainLines: true,
  compact: false,
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
      ]
    }
  },
  
};