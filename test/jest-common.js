// common project configuration used by the other configs

const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../src'),
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    __dirname,
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
}
