module.exports = {
	extends: [
		'@infinumjs/eslint-config-core-ts',
		'@infinumjs/eslint-config-react-js',
		'plugin:typescript-enum/recommended',
	],
	plugins: ['typescript-enum'],
	globals: {
		JSX: true,
	},
	rules: {
		'typescript-enum/no-enum': 'warn',
		'typescript-enum/no-const-enum': 'warn',
	},
};
