// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./utils/setupTests.mjs'],
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.js', '.jsx'], 

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@open-wc)/)',

   ],
};
