module.exports = {
  moduleNameMapper: {
    "\\.(svg|css|scss)$": "<rootDir>/tools/assetsTransformer.js"
  },
  setupFiles: ["./tools/jestSetup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/transitions/"
  ]
};
