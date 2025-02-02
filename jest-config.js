module.exports = {
    // Use ts-jest to compile TypeScript files
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Configure Jest to look for test files in the "src" folder
    roots: ['<rootDir>/src'],
    // File extensions to look for
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // Set up test matching pattern (e.g., any file with `.test.ts` or `.spec.ts` will be treated as a test)
    testMatch: ['**/?(*.)+(spec|test).ts'],
    // Optional: Add more setup if needed, such as mock functions or before/after hooks
    setupFiles: [],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"],
  };
  