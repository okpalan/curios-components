const fetch = require("node-fetch");
const { html, fixture } = require('@open-wc/testing');
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

// Export setup function for manual invocation if needed
module.exports = { setupJest: () => {} }; // No manual setup function needed
