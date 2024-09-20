export * from './noisy-notification/noisy-notification.js'
// src/main.js
import { setupJest } from './utils/setupJest.js';
import { setupTests } from './utils/setupTests.js';

setupJest();
setupTests();

// Your main code logic
console.log("Draft project initialized with ESM!");
