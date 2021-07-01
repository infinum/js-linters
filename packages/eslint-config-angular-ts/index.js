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
  extends: ['@infinumjs/eslint-config-core-ts'],
  plugins: ['rxjs'],
  rules: {
    // want more rxjs specific rules? https://github.com/cartant/eslint-plugin-rxjs
    "rxjs/no-async-subscribe": "error",
    "rxjs/no-ignored-observable": "error",
    "rxjs/no-ignored-subscription": "error",
    "rxjs/no-nested-subscribe": "error",
    "rxjs/no-unbound-methods": "error",
    "rxjs/throw-error": "error",
    // from tslint-config-angular, just eslint versions
    "rxjs/finnish": [
      "warn",
      {
        function: false,
        methods: false,
        parameters: true,
        properties: true,
        types: {
          "^EventEmitter$": false
        },
        variables: true,
      }
    ],
    "rxjs/no-exposed-subjects": [
      "warn",
      { allowProtected: true }
    ],        
  }
};
