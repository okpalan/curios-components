module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost', 
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
  moduleDirectories: ['src', 'utils', 'node_modules'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
  ],
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
      tsconfig: 'tsconfig.json',
      sourceMap: false, // Disable source maps
    },
  },
  setupFilesAfterEnv: ['./utils/setupTests.cjs', './utils/setupJest.cjs'],
};
