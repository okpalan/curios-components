const fetch = require("node-fetch");

function setupJest() {
    Object.defineProperty(global, 'fetch', {
        value: fetch,
        writable: true,
        configurable: true,
    });
}

setupJest();

module.exports = { setupJest };
