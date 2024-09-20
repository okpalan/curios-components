(async () => {
    const { html, fixture } = await import('@open-wc/testing');
    const { JSDOM } = await import('jsdom');
    const { TextEncoder, TextDecoder } = await import('util');
  
    // Polyfill TextEncoder and TextDecoder
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
  
    // Create a jsdom environment
    const { window } = new JSDOM();
    globalThis.window = window;
    globalThis.document = window.document;
    globalThis.navigator = window.navigator;
  
    // Set up test helpers
    globalThis.html = html;
    globalThis.fixture = fixture;
  })();
  