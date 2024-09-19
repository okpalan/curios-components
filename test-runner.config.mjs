import { html, fixture } from '@open-wc/testing';
import { JSDOM } from 'jsdom';

// Create a jsdom environment
const { window } = new JSDOM();
global.window = window;
global.document = window.document;

export default {
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
  nodeResolve: true,
  plugins: [
    {
      name: 'test-setup',
      setup() {
        globalThis.html = html;
        globalThis.fixture = fixture;
        // Ensure Chai is aware of the window object
        const chai = require('chai');
        chai.config.truncateThreshold = 0;
      },
    },
  ],
  testIsolation: false,
};
