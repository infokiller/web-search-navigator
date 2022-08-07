/* global module */

module.exports = {
  env: {
    es2017: true,
    browser: true,
    webextensions: true,
  },
  extends: ['eslint:recommended', 'google', 'plugin:json/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'require-jsdoc': 0,
    'space-in-parens': ['error', 'never'],
  },
};
