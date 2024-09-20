import '@testing-library/jest-dom';

// Polyfill TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Import `@open-wc/testing`
import { html, fixture } from '@open-wc/testing';

// Create a jsdom environment
import { JSDOM } from 'jsdom';
const { window } = new JSDOM();
globalThis.window = window;
globalThis.document = window.document;
globalThis.navigator = window.navigator;

// Set up test helpers
globalThis.html = html;
globalThis.fixture = fixture;
