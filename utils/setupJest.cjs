// utils/setupJest.js

// Example Jest setup configuration
module.exports = function setupJest() {
    // Configure global variables or mocks here
    global.someGlobalVariable = 'value';
  
    // Setup any required modules or mock functions
    jest.mock('some-module', () => ({
      someFunction: jest.fn(() => 'mocked value'),
    }));
  
    console.log("Jest setup complete!");
  };
  