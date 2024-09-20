module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.test.cjs' }],
    '^.+\\.ts$': 'ts-jest',
  },
  
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(gif|jpg|jpeg|png)$': 'jest-transform-stub',
  },
  
  transformIgnorePatterns: [
    '/node_modules/(?!@open-wc/testing)', 
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  
  setupFilesAfterEnv: ['./utils/setupTests.cjs'], 
};
