import { html, fixture } from '@open-wc/testing';

export default {
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
};
