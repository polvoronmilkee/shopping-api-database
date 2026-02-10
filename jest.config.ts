module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  testMatch: [
    "**/__tests__/**/*.test.ts",
    "**/__tests__/**/*.integration.test.ts",
  ],
  testPathIgnorePatterns: ["/node_modules/", "__tests__/utils/"],
};
