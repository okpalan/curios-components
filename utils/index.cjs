const componentUtils = require("./components.utils.cjs");
const { setupJest } = require("./jest.setup.cjs");

module.exports = {
    ...componentUtils,
    ...setupJest
}
