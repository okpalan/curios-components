module.exports = {
    // Use jsdom environment for browser-like testing
    testEnvironment: 'jsdom',
  
    // Transform files with Babel
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  
    // Include setup files after the test framework has been installed in the environment
    setupFilesAfterEnv: [
      './test/setupTests.js', // Path to your setup file
    ],
  
    // Configure file extensions for test files
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
    // Match test files
    testMatch: [
      '**/?(*.)+(spec|test).js?(x)', // Matches files ending in .spec.js or .test.js
    ],
  
    // Set up custom test runner options (if any)
    testRunner: 'jest-circus/runner',
    testTimeout: 50000, // Adjust test timeout as needed
  };
  