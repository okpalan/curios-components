module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.test.cjs' }], // For JavaScript files
    '^.+\\.ts$': 'ts-jest', // For TypeScript files
  },

  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS modules
    '\\.(gif|jpg|jpeg|png)$': 'jest-transform-stub', // Mock image files
  },

  transformIgnorePatterns: [
    '/node_modules/(?!@open-wc/testing)', // Include specific modules for transformation
    '^.+\\.module\\.(css|sass|scss)$', // Ignore CSS modules
  ],

  globals: {
    'ts-jest': {
      useESM: true, // Enable ESM support for TypeScript files
    },
  },

  setupFilesAfterEnv: ['./utils/setupTests.cjs'], // Setup file after environment
};
