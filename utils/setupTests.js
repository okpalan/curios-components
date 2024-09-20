// Import the necessary libraries
import '@testing-library/jest-dom/extend-expect';
import { html, fixture } from '@open-wc/testing';
import * as chai from 'chai';

// Set up Chai
chai.config.truncateThreshold = 0;
globalThis.expect = chai.expect;

// Set up test helpers
globalThis.html = html;
globalThis.fixture = fixture;

// Set up Jest

