// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': ['eslint:recommended', 'google'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 11,
  },
  'rules': {
    'require-jsdoc': 0,
  },
};
