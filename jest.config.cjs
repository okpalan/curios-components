// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./utils/setupTests.mjs'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(your-esm-module|another-esm-module)/)" // If you have specific ESM modules to transform
  ],
};
