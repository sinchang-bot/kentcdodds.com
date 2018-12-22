const path = require('path')

module.exports = {
  collectCoverageFrom: ['**/src/**/*.+(js|ts|tsx)'],
  coverageThreshold: {
    // global: {
    //   statements: 10,
    //   branches: 5,
    //   functions: 15,
    //   lines: 8,
    // },
  },
  testMatch: ['**/__tests__/**/*.+(js|ts|tsx)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': require.resolve('./test/jest-process'),
  },
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, './src'),
    path.join(__dirname, './test'),
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
  testEnvironment: 'jest-environment-jsdom',
  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
  snapshotSerializers: ['jest-emotion/serializer'],
}
