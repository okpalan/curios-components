async function setupTests() {
  const { html, fixture } = await import('@open-wc/testing');
  const { JSDOM } = require('jsdom');
  const { TextEncoder, TextDecoder } = require('util');

  // Set up global TextEncoder and TextDecoder
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;

  // Create a new JSDOM instance
  const { window } = new JSDOM();
  
  // Set globals for testing
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;

  // Attach testing utilities to global
  globalThis.html = html;
  globalThis.fixture = fixture;

  // Mock the getContext method for HTMLCanvasElement
  HTMLCanvasElement.prototype.getContext = () => {
    return {
      fillRect: jest.fn(),
      // Add more mock methods if needed
      // Example:
      drawImage: jest.fn(),
      getImageData: jest.fn(() => ({
        data: new Uint8ClampedArray(),
        width: 0,
        height: 0,
      })),
    };
  };
}

// Call setupTests to initialize globals
setupTests();

// Export the function for manual invocation in tests
module.exports = {
  setupTests
};
