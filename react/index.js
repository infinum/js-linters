module.exports = {
  extends: ['airbnb', '', '../'],
  rules: {
    'react/jsx-max-props-per-line': [1, {
      'maximum': 1
    }],
    'react/jsx-no-bind': [1, {
      'ignoreRefs': false,
      'allowArrowFunctions': false,
      'allowBind': false
    }],
    'prefer-default-export': true
  }
};
