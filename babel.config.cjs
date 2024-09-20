module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
        ['@babel/preset-env', {
          targets: {
            node: 'current', // or the version of Node you're using
          },
        }],
    
    ],
    setupFilesAfterEnv: ['./utils/setupTests.js'],
    testMatch: ['**/?(*.)+(spec|test).js?(x)'],
    testRunner: 'jest-circus/runner',
    testTimeout: 50000,
  };
  