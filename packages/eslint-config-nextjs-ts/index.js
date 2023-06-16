module.exports = {
	extends: ['plugin:@next/next/recommended', '@infinumjs/eslint-config-react-ts'],
	rules: {
		'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
	},
};
