// utils/setupTests.js

const { html, fixture } = require('@open-wc/testing');
const { JSDOM } = require('jsdom');
const { TextEncoder, TextDecoder } = require('util');

// Polyfill TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Create a jsdom environment
const { window } = new JSDOM();
globalThis.window = window;
globalThis.document = window.document;
globalThis.navigator = window.navigator;

// Set up test helpers
globalThis.html = html;
globalThis.fixture = fixture;
