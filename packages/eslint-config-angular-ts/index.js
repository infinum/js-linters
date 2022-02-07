module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		es2017: true,
		es2020: true,
		jasmine: true,
		node: true,
	},
	extends: ['plugin:rxjs/recommended', 'plugin:jasmine/recommended', '@infinumjs/eslint-config-core-ts'],
	plugins: ['jasmine'],
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
};
