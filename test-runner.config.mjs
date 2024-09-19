import { html, fixture } from '@open-wc/testing';

export default {
  // Use 'chrome' or 'firefox' for browser-based testing
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
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
  testEnvironment: 'jsdom',
  
};
