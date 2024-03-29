import { TSESLint } from '@typescript-eslint/utils';

export default {
	extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
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
} satisfies TSESLint.Linter.Config;
