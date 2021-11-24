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
  extends: [
    '@infinumjs/eslint-config-core-js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: ["enum", "enumMember"],
        format: ["StrictPascalCase"]
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["StrictPascalCase"],
        prefix: ["is", "should", "has"]
      },
      {
        selector: "typeParameter",
        format: ["StrictPascalCase"],
        prefix: ["T"]
      }
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'generic',
        'readonly': 'generic'
      }
    ],
  },
};
