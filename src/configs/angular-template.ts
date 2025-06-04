import { TSESLint } from '@typescript-eslint/utils';

export default {
	extends: ['plugin:@angular-eslint/template/all'],
	rules: {
		'@angular-eslint/template/i18n': 'off',
		'@angular-eslint/template/no-call-expression': 'off',
		'@angular-eslint/template/no-inline-styles': [
			'error',
			{
				allowNgStyle: true,
				allowBindToStyle: true,
			},
		],
	},
} satisfies TSESLint.Linter.ConfigType;
