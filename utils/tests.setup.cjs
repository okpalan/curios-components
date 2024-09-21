

async function setupTests() {
  const { html, fixture } = require('@open-wc/testing');
  const { JSDOM } = require('jsdom');
  const { TextEncoder, TextDecoder } = require('util');

  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;

  const { window } = new JSDOM();
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;

  globalThis.html = html;
  globalThis.fixture = fixture;

  // Mock the getContext method for HTMLCanvasElement
  HTMLCanvasElement.prototype.getContext = () => {
      return {
        
          // Mock methods as needed
          fillRect: jest.fn(),

        };
  };
}
setupTests();

module.exports = {
  setupTests
}