import { TSESLint } from '@typescript-eslint/utils';

export default {
	extends: ['plugin:@next/next/recommended'],
	rules: {
		'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
	},
} satisfies TSESLint.Linter.Config;
