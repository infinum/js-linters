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
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [
      'error',
      {
        'skipUndeclared': true
      }
    ],
    'jsx-a11y/anchor-is-valid': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
