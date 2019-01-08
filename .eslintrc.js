module.exports = {
  extends: ['kentcdodds', 'kentcdodds/react', 'kentcdodds/jest'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.tsx'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.+(ts|tsx)'],
      parser: 'pluggable-babel-eslint',
      parserOptions: {
        plugins: ['typescript'],
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
