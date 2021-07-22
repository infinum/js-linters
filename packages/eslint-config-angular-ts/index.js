module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2017: true,
    es2020: true,
    node: true,
  },
  extends: ['@infinumjs/eslint-config-core-ts', 'plugin:rxjs/recommended'],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "overrides": {
          "constructors": "off"
        }
      }
    ],
    "@typescript-eslint/prefer-readonly": ["error"]
  },
};
