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
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always'
      }
    ],
  }
};
