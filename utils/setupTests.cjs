require('@testing-library/jest-dom');


// Polyfill TextEncoder and TextDecoder
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

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
