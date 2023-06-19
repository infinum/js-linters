module.exports = {
	extends: ['plugin:@next/next/recommended', '@infinumjs/eslint-config-react-ts'],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['__tests__/tsconfig.json'],
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
	},
};
