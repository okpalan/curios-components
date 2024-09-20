const babel = require('@rollup/plugin-babel');

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
        "@babel/plugin-transform-modules-commonjs" ,
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
        }),
      ]
    }
  },
  retainLines: true,
  compact: false
};
