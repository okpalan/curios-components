module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./utils/setupTests.cjs'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'], 

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',  // Removed redundant "transform" key
  },
  transformIgnorePatterns: [
    '/node_modules/',  // This is fine if you want to ignore all node modules
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
