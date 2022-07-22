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
	extends: ['@infinumjs/eslint-config-core-js'],
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: './__tests__/tsconfig.json',
				ecmaVersion: 2018,
				sourceType: 'module',
			},
			rules: {
				'@typescript-eslint/array-type': [
					'error',
					{
						default: 'generic',
						readonly: 'generic',
					},
				],
				'@typescript-eslint/consistent-type-definitions': 'error',
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{
						accessibility: 'explicit',
						overrides: {
							constructors: 'no-public',
						},
					},
				],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'interface',
						format: ['PascalCase'],
						custom: {
							regex: '^I[A-Z]',
							match: true,
						},
					},
				],
				'@typescript-eslint/no-inferrable-types': 'warn',
				'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'@typescript-eslint/prefer-readonly': 'error',
			},
		},
	],
};
