const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  runner: 'jest-runner-tsc',
  displayName: 'tsc',
  moduleFileExtensions: ['ts', 'tsx'],
  testMatch: ['<rootDir>/**/*.+(ts|tsx)'],
}
