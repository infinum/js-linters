import { TSESLint } from '@typescript-eslint/utils';

export default {
	plugins: ['chakra-ui'],
	rules: {
		'chakra-ui/props-order': 'error',
		'chakra-ui/props-shorthand': 'error',
		'chakra-ui/require-specific-component': 'error',
	},
} satisfies TSESLint.Linter.Config;
