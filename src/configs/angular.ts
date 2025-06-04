import { TSESLint } from '@typescript-eslint/utils';

export default {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		es2017: true,
		es2020: true,
		jasmine: true,
		node: true,
	},
	extends: ['plugin:rxjs/recommended', 'plugin:jasmine/recommended', 'plugin:@angular-eslint/recommended'],
	plugins: ['jasmine'],
	overrides: [
		{
			files: ['*.html'],
			extends: ['plugin:@angular-eslint/template/all'],
			rules: {
				'@angular-eslint/template/conditional-complexity': 'warn',
				'@angular-eslint/template/cyclomatic-complexity': 'warn',
				'@angular-eslint/template/interactive-supports-focus': 'warn',
				'@angular-eslint/template/click-events-have-key-events': 'warn',
				'@angular-eslint/template/mouse-events-have-key-events': 'warn',
				'@angular-eslint/template/i18n': 'off',
				'@angular-eslint/template/prefer-contextual-for-variables': 'off',
				'@angular-eslint/template/prefer-static-string-properties': 'off',
				'@angular-eslint/template/no-interpolation-in-attributes': 'off',
				'@angular-eslint/template/no-call-expression': 'off',
				'@angular-eslint/template/no-inline-styles': [
					'error',
					{
						allowNgStyle: true,
						allowBindToStyle: true,
					},
				],
			},
		},
	],
	rules: {
		'prefer-arrow/prefer-arrow-functions': 'off',
		'rxjs/finnish': [
			'error',
			{
				functions: false,
				methods: false,
				names: {
					'^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
				},
				parameters: true,
				properties: true,
				strict: false,
				types: {
					'^EventEmitter$': false,
				},
				variables: true,
			},
		],
		'rxjs/no-exposed-subjects': ['error'],
		'rxjs/no-implicit-any-catch': 'off',
		'rxjs/no-sharereplay': 'off',
	},
} satisfies TSESLint.Linter.ConfigType;
