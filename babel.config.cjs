// babel.config.cjs
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs" 
      ]
    }
  },
  retainLines: true,
  compact: false
};
