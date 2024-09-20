// Import the setup functions
const { setupJest } = require('../utils/setupJest.cjs');
const { setupTests } = require('../utils/setupTests.cjs');

// Call the setup functions
setupJest();
setupTests();

// Re-export from noisy-notification
module.exports = {
    ...require('./noisy-notification/noisy-notification.js'),
};

