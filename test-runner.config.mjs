import { html, fixture } from '@open-wc/testing';

export default {
  // Use 'chrome' or 'firefox' for browser-based testing
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
  // Set to 'true' to see browser console output
  verbose: false,
  // Set to 'true' to see browser errors
  debug: false,
  
  nodeResolve: true,
  testIsolation: false,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  plugins: [
    {
      name: 'test-setup',
      setup() {
        globalThis.html = html;
        globalThis.fixture = fixture;
      },
    },
    
  ],
};
