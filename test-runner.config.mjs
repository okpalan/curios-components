import { fileURLToPath, URL } from 'url';
import * as chai from 'chai';
import { html, fixture } from '@open-wc/testing';

// Convert setupTests.js file path to absolute path
const setupTestsFilePath = fileURLToPath(new URL('./utils/setupTests.js', import.meta.url));

export default {
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
  nodeResolve: true,
  setupFiles: [setupTestsFilePath],  
  plugins: [
    {
      name: 'test-setup',
      setup() {
        globalThis.html = html;
        globalThis.fixture = fixture;
        globalThis.expect = chai.expect;
      },
    },
  ],
  testMatch: [
    '**/*.test.js',
  ],
  testRunner: 'jest-circus/runner',
  testTimeout: 50000,
  testIsolation: false,
};
