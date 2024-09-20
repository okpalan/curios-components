module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./utils/setupTests.cjs'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {},
};
