module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'cypress/globals': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'plugins': [
    'react', 'jest', 'cypress'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}