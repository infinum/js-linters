import { TSESLint } from '@typescript-eslint/utils';

export default {
	env: {
		jest: true,
		es2022: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:typescript-enum/recommended',
	],
	settings: {
		react: {
			version: process.env.NODE_ENV === 'test' ? 'v18.2.0' : 'detect',
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	globals: {
		JSX: true,
	},
	rules: {
		'consistent-return': 'warn',
		'jsx-a11y/anchor-is-valid': 'warn',
		'no-param-reassign': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': ['error', { additionalHooks: '(useSafeLayoutEffect|useUpdateEffect)' }],
		'react/prop-types': ['error', { skipUndeclared: true }],
		'react/react-in-jsx-scope': 'off',
		'react/self-closing-comp': ['warn', { component: true, html: true }],
		'react/no-unknown-property': ['error', { ignore: ['css'] }],
		'typescript-enum/no-enum': 'warn',
		'typescript-enum/no-const-enum': 'warn',
	},
} satisfies TSESLint.Linter.Config;
