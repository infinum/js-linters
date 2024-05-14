import { TSESLint } from '@typescript-eslint/utils';

export default {
	extends: ['plugin:@next/next/recommended'],
	plugins: ['@infinum'],
	rules: {
		'@infinum/no-hooks-in-pages-folder': 'error',
		'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'], allowAfterThis: true }],
	},
} satisfies TSESLint.Linter.Config;
