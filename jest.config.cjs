module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
  moduleDirectories: ['src', 'utils', 'node_modules'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'html', "node"],
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
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(gif|jpg|jpeg|png)$': 'jest-transform-stub',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.html$': '<template></template>', // Mock for HTML files
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!@open-wc/testing)',
  ],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.json',
      sourceMap: false, // Disable source maps
    },
  },
  setupFilesAfterEnv: ['./utils/tests.setup.cjs', './utils/jest.setup.cjs'],
};
