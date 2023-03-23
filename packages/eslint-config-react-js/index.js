module.exports = {
	env: {
		jest: true,
		es2022: true,
	},
	extends: ['@infinumjs/eslint-config-core-js', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
	plugins: ['react', 'react-hooks', 'jsx-a11y'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react/self-closing-comp': ["warn", {
			"component": true,
			"html": true
		}],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': [
			'error',
			{
				skipUndeclared: true,
			},
		],
		'jsx-a11y/anchor-is-valid': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'error',
			{
				additionalHooks: '(useSafeLayoutEffect|useUpdateEffect)',
			},
		],
		'no-param-reassign': 'warn',
		'consistent-return': 'warn',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: "always",
				prev: "*",
				next: [
					"return",
					"if",
					"switch",
					"for",
					"while",
					"try",
					"throw",
					"export",
				],
			},
			{
				blankLine: "always",
				prev: [
					"const",
					"let",
					"var",
					"import",
				],
				next: "*",
			},
			{
				blankLine: "any",
				prev: [
					"const",
					"let",
					"var",
					"import",
				],
				next: [
					"const",
					"let",
					"var",
					"import"
				],
			},
		],
	},
};
