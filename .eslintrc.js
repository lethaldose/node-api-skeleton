module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0
  },
};