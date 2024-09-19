// test-runner.config.mjs

import { createRunner } from '@web/test-runner';
import { html, fixture } from '@open-wc/testing';

export default {
  // Use 'chrome' or 'firefox' for browser-based testing
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
  nodeResolve: true,
  plugins: [
    createRunner({
      config: {
        testEnvironment: 'jsdom',
        transform: {},
        setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      },
    }),
    {
      name: 'test-setup',
      setup() {
        globalThis.html = html;
        globalThis.fixture = fixture;
      },
    },
  ],
  testIsolation: false,
};
