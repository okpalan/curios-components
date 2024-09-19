import { html, fixture } from '@open-wc/testing';

export default {
  browsers: ['chrome'],
  files: './tests/**/*.test.js',
  nodeResolve: true,
  plugins: [
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
