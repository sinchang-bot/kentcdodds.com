const wp = require('@cypress/webpack-preprocessor')

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { chrome: '59' } }],
                [
                  '@babel/preset-typescript',
                  { isTSX: true, allExtensions: true },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
}

module.exports = on => {
  const options = {
    webpackOptions,
  }
  on('file:preprocessor', wp(options))
}
