module.exports = {
  entry: [
    "./node_modules/core-js/client/shim",
    "./node_modules/zone.js/dist/zone",
    "./node_modules/reflect-metadata/Reflect",
    "./dist/main"],
  output: {
    filename: "bundle.js"
  }
};
