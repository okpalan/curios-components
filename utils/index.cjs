const componentUtils = require("./componentUtils.cjs");
const setupTests = require("./tests.setup.cjs");
const { setupJest } = require("./jest.setup.cjs");
module.exports = {
    ...componentUtils,
    ...setupTests,  
    ...setupJest
}
