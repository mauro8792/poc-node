module.exports = {
  moduleFileExtensions: ["js", "node"],
  testMatch: ["**/*.test.js"],
  testPathIgnorePatterns: ["node_modules"],
  coveragePathIgnorePatterns: ["node_modules", "src/config", "src/app.js", "tests", "build"],
  testEnvironment: "node",
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  bail: 1,
  verbose: true,
};
