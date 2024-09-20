module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {},
  setupFilesAfterEnv: ['./utils/setupTests.js'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  testRunner: 'jest-circus/runner',
  testTimeout: 50000,
};
