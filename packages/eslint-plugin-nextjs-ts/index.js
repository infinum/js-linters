module.exports = {
	rules: {
		'no-hooks-in-pages-folder': require('./rules/no-hooks-in-pages-folders'),
		'enforce-component-boundaries': require('./rules/enforce-component-boundaries'),
	},

	configs: {
		recommended: {
			plugins: ['@infinumjs/nextjs-ts'],
			rules: {
				'@infinumjs/nextjs-ts/no-hooks-in-pages-folder': 'error',
				'@infinumjs/nextjs-ts/enforce-component-boundaries': 'error',
			},
		},
	},
};
