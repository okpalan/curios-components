module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./utils/setupTests.cjs'],
  extensionsToTreatAsEsm: ['.ts', '.tsx',], 

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
      },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    
   ],
};
