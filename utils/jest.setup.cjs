const fetch = require("node-fetch");
const { JSDOM } = require('jsdom');
const { TextEncoder, TextDecoder } = require('util');

// Set up global TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Create a new JSDOM instance
const { window } = new JSDOM();

// Set globals for testing
global.window = window;
global.document = window.document;
global.navigator = window.navigator;

// Mock the getContext method for HTMLCanvasElement
HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  fillRect: jest.fn(),
  drawImage: jest.fn(),
  getImageData: jest.fn(() => ({
    data: new Uint8ClampedArray(),
    width: 0,
    height: 0,
  })),
}));

// Set up fetch
Object.defineProperty(global, 'fetch', {
    value: fetch,
    writable: true,
    configurable: true,
});

// Load testing utilities dynamically
async function setupTestingUtils() {
    const { html, fixture } = await import('@open-wc/testing');
    global.html = html;
    global.fixture = fixture;
}

// Call the function to load the testing utilities
setupTestingUtils().catch(err => {
    console.error("Error setting up testing utilities:", err);
});

// Export an empty function since no manual invocation is needed
module.exports = { setupJest: () => {} };
