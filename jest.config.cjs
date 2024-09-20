module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.test.cjs' }], // For JavaScript files
    '^.+\\.ts$': 'ts-jest', // For TypeScript files if needed
  },
  
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Mock CSS modules if necessary
  },
  
  transformIgnorePatterns: [
    '/node_modules/(?!@open-wc/testing)', // Include specific modules for transformation
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  
  globals: {
    'ts-jest': {
      useESM: true, // Enable ESM support for TypeScript files
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(gif|jpg|jpeg|png)$': 'jest-transform-stub',
  },
  
  setupFilesAfterEnv: ['./utils/setupTests.cjs'], 
};
