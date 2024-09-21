function setupJest() {
    Object.defineProperty(global, "fetch", {
        value: require("node-fetch"),
    });
}   

module.exports = { setupJest };