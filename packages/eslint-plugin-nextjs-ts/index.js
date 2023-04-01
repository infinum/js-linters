module.exports = {
	rules: {
		'no-hooks-in-pages-folder': require('./rules/no-hooks-in-pages-folders'),
	},

	configs: {
		recommended: {
			plugins: ['@infinumjs/nextjs-ts'],
			rules: {
				// '@infinumjs/no-hooks-in-pages-folder': 'error',
				// 'no-hooks-in-pages-folder': 'error',
				'@infinumjs/nextjs-ts/no-hooks-in-pages-folder': 'error',
				// '@infinumjs/eslint-plugin-nextjs-ts/no-hooks-in-pages-folder': 'error',
			},
		},
	},
};
