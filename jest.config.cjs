module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['./utils/setupTests.cjs'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {},
};