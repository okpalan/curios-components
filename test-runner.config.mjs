import { html, fixture } from '@open-wc/testing';
import { JSDOM } from 'jsdom';
import chai from 'chai';

// Create a jsdom environment
const { window } = new JSDOM();
globalThis.window = window;
globalThis.document = window.document;

// Set up Chai
chai.config.truncateThreshold = 0;
globalThis.expect = chai.expect;

// Set up test helpers
globalThis.html = html;
globalThis.fixture = fixture;

export default {
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
  nodeResolve: true,
  setupFiles: ['./utils/setupTests.js'],  // Path to the setup file
  testIsolation: false,  // Adjust based on your needs
};
