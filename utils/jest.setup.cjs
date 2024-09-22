const fetch = require("node-fetch");
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
    globalThis.html = html;
    globalThis.fixture = fixture;
}

// Call the function to load the testing utilities
setupTestingUtils();

// Export an empty function since no manual invocation is needed
module.exports = { setupJest: () => {} };
