// utils/setupTests.js
require('@testing-library/jest-dom/extend-expect');

const { JSDOM } = require('jsdom');
const { html, fixture } = require('@open-wc/testing');
const chai = require('chai');

// Create a jsdom environment
const { window } = new JSDOM();
globalThis.window = window;
globalThis.document = window.document;
globalThis.navigator = window.navigator;

// Set up Chai
chai.config.truncateThreshold = 0;
globalThis.expect = chai.expect;

// Set up test helpers
globalThis.html = html;
globalThis.fixture = fixture;
