module.exports = {
  extends: ['kentcdodds', 'kentcdodds/react', 'kentcdodds/jest'],
  parser: 'babel-eslint',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      configFile: require.resolve('./test/babel-config.js'),
    },
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-pascal-case': 'off',
    'no-console': 'warn',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.tsx'],
          },
        },
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'react/prop-types': 'off',
        'import/no-unresolved': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.js', '.tsx'],
          },
        ],
      },
    },
  ],
}
