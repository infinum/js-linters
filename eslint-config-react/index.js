module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@infinumjs/eslint-config',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react'
  ],
  plugins: ['react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect'
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': [
      'error',
      {
        'ignore': [],
        'customValidators': [],
        'skipUndeclared': true
      }
    ],
    'jsx-a11y/anchor-is-valid': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
