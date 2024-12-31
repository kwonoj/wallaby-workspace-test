const { createJsWithTsPreset } = require('ts-jest');
const path = require('path');

const rootDir = __dirname;
const tsconfig = path.resolve(rootDir, '../tsconfig.jest.json');

/**
 * A jest configuration for the base of any command-related packages.
 *
 * @type {import('jest').Config}
 */
const commandBaseConfig = {
  transform: createJsWithTsPreset({
    tsconfig,
    isolatedModules: true,
  }).transform,
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  testMatch: ['<rootDir>/**/?(*.)+(unit).ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  testLocationInResults: true,
  setupFiles: [],
  // workaround https://github.com/jestjs/jest/issues/5064
  reporters: ['jest-standard-reporter'],
  cacheDirectory: 'dist/cache/jest',
  collectCoverage: true,
  coverageReporters: ['text-summary', 'cobertura', 'lcov', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
};

module.exports = { commandBaseConfig };
