module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'], 

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.test.cjs' }],
  },
  setupFilesAfterEnv: ['./utils/setupTests.cjs'],
  transformIgnorePatterns: [
    '/node_modules/',  
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
