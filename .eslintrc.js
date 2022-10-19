/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Force all variable names to use either camelCase style or UPPER_CASE
      // with underscores.
      "camelcase": true,

      // Prohibit use of == and != in favor of === and !==.
      "eqeqeq": true,

      // Suppress warnings about == null comparisons.
      "eqnull": true,

      // Enforce tab width of 2 spaces.
      "indent": 2,

      // Prohibit use of a variable before it is defined.
      "latedef": true,

      // Require capitalized names for constructor functions.
      "newcap": true,

      // Enforce use of single quotation marks for strings.
      "quotmark": "single",

      // Prohibit trailing whitespace.
      "trailing": true,

      // Prohibit use of explicitly undeclared variables.
      "undef": true,

      // Warn when variables are defined but never used.
      "unused": true,

      // Enforce line length to 80 characters
      "maxlen": 80,

      // Enforce placing 'use strict' at the top function scope
      "strict": true
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};