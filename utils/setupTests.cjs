require('@testing-library/jest-dom');

const { JSDOM } = require('jsdom');
const { html, fixture } = require('@open-wc/testing');

// Create a jsdom environment
const { window } = new JSDOM();
globalThis.window = window;
globalThis.document = window.document;
globalThis.navigator = window.navigator;

// Set up test helpers
globalThis.html = html;
globalThis.fixture = fixture;
