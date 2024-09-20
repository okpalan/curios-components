module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['./utils/setupTests.js'],
    testMatch: ['**/?(*.)+(spec|test).js?(x)'],
    testRunner: 'jest-circus/runner',
    testTimeout: 50000,
  };
  