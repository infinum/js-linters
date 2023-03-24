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
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'no-constant-binary-expression': 'error',
		'no-implicit-coercion': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-nested-ternary': 'error',
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'no-void': 'error',
		semi: 'error',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: ['return', 'if', 'switch', 'for', 'while', 'try', 'throw', 'export'],
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var', 'import'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var', 'import'],
				next: ['const', 'let', 'var', 'import'],
			},
		],
	},
};
