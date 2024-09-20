require('@testing-library/jest-dom');
const { JSDOM } = require('jsdom');

// Set up a JSDOM environment if needed
const { window } = new JSDOM();
global.window = window;
global.document = window.document;
global.navigator = window.navigator;


