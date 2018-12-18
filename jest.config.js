module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: [
    '**/src/**/*.+(js|ts|tsx)',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    // global: {
    //   statements: 10,
    //   branches: 5,
    //   functions: 15,
    //   lines: 8,
    // },
  },
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.tsc.config.js',
  ],
}
