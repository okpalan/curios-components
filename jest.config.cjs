module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'], 

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.test.js' }],
  },
  setupFilesAfterEnv: ['./utils/setupTests.cjs'],
  transformIgnorePatterns: [
    '/node_modules/',  
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
