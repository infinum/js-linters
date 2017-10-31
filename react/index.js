module.exports = {
  extends: ['../index.js'],
  rules: {

    // overridden react rules
    'react/jsx-max-props-per-line': [1, {
      'maximum': 1
    }],
    'react/jsx-no-bind': [1, {
      'ignoreRefs': false,
      'allowArrowFunctions': false,
      'allowBind': false
    }],
    'react/jsx-filename-extension': [1, {
      'extensions': ['.js', '.jsx']
    }],
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1,

    // overridden import rules
    'import/prefer-default-export': 2,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [2, {
      'devDependencies': true
    }],

    'no-unused-vars': 1,
    'class-methods-use-this': [1, {
      'exceptMethods': ['render', 'constructor', 'componentWillMount',
      'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate',
      'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'componentDidCatch']
    }],
    'object-curly-spacing': 0
  }
};
