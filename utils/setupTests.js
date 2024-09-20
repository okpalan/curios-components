// Import the necessary libraries
import '@testing-library/jest-dom/extend-expect';
import { html, fixture } from '@open-wc/testing';
import * as chai from 'chai';

// Set up Chai
chai.config.truncateThreshold = 0;
globalThis.expect = chai.expect;

// Set up test helpers
globalThis.html = html;
// test/setupTests.js
import '@testing-library/jest-dom/extend-expect';

import { JSDOM } from 'jsdom';
import { html, fixture } from '@open-wc/testing';
import * as chai from 'chai';

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

// Set up Jest

