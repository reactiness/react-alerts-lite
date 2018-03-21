module.exports = {
  // "moduleNameMapper": {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tools/assetsTransformer.js",
  //   "\\.(css|scss)$": "<rootDir>/tools/assetsTransformer.js"
  // },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/tools/enzymeTestAdapterSetup.js",
  moduleFileExtensions: ["js", "jsx", "json"],
  moduleDirectories: ["src"],
  setupFiles: ["./tools/enzymeTestAdapterSetup.js"],
  roots: ['<rootDir>'],
};
