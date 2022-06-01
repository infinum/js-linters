const path = require('path');
const eslint = require('eslint');
const assert = require('assert');

const eslintConfig = require('../index');

// Object.keys(eslintConfig.rules).forEach((ruleName) => {
// 	const fileName = ruleName.replace('@typescript-eslint/', '');
// 	const rulePath = path.resolve(__dirname, './rules/', fileName);
// 	let test;

// 	try {
// 		test = require(rulePath);

// 		const partialConfig = { ...eslintConfig };
// 		partialConfig.parserOptions.project = ['./test/tsconfig.json'];
// 		// partialConfig.parserOptions.extraFileExtensions = ['()'];
// 		partialConfig.rules = {};
// 		partialConfig.rules[ruleName] = eslintConfig.rules[ruleName];

// 		configTester(ruleName, partialConfig, test);
// 	} catch (e) {
// 		// noop
// 		if (ruleName === '@typescript-eslint/naming-convention') {
// 			console.log('arror', e);
// 		}
// 	}
// });

const msgToText = (msg) => `${msg.line},${msg.column}: ${msg.ruleId} - ${msg.message}`;

describe('@typescript-eslint/naming-convention', () => {
	describe('valid', () => {
		it('should alow PascalCase interface with I prefix', async () => {
			const ruleName = '@typescript-eslint/naming-convention';
			const baseConfig = { ...eslintConfig };
			baseConfig.parserOptions.project = ['./test/tsconfig.json'];
			baseConfig.rules = {};
			baseConfig.rules[ruleName] = eslintConfig.rules[ruleName];

			const cli = new eslint.ESLint({ baseConfig });

			const results = await cli.lintText(`
			interface ITestInterface {}
			`);
			const errorCount = results.reduce((count, result) => count + result.errorCount, 0);

			assert.strictEqual(
				errorCount,
				0,
				`Should have no errors but had ${errorCount}:\n${msgToText(
					results.map((result) => result.messages.map((msg) => msgToText(msg)).join('\n'))
				)}`
			);
		});
	});

	describe('invalid', () => {
		it(invalid.code, async () => {
			await testInvalidTemplate(invalid);
		});
	});
});
