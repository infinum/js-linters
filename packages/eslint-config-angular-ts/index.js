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
	extends: ['plugin:rxjs/recommended', '@infinumjs/eslint-config-core-ts'],
	rules: {
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				overrides: {
					constructors: 'off',
				},
			},
		],
		'@typescript-eslint/prefer-readonly': ['error'],
		'rxjs/no-exposed-subjects': ['error'],
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
	},
};
