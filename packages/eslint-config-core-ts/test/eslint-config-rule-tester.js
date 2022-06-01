/**
 * @fileoverview helper to test config files.
 * Adapted from ESLint's RuleTester
 * and eslint-config-tester (https://www.npmjs.com/package/eslint-config-tester)
 */

const assert = require('assert');
const eslint = require('eslint');

const configTester = (ruleName, configObj, testFile) => {
	const cli = new eslint.ESLint({ baseConfig: configObj });

	const msgToText = (msg) => `${msg.line},${msg.column}: ${msg.ruleId} - ${msg.message}`;

	/**
	 * Check if the template is valid or not
	 * all valid cases go through this
	 * @param {string} text to run the rule against
	 * @returns {void}
	 * @private
	 */
	const testValidTemplate = async (text) => {
		const results = await cli.lintText(text);
		const errorCount = results.reduce((count, result) => count + result.errorCount, 0);

		console.log(results[0].messages[0]);

		assert.strictEqual(
			errorCount,
			0,
			`Should have no errors but had ${errorCount}:\n${msgToText(
				results.map((result) => result.messages.map((msg) => msgToText(msg)).join('\n'))
			)}`
		);
	};

	const compareSingleErrorMessageToExpected = (actualErrorMsg, expectedErrorMsg) => {
		assert(
			typeof expectedErrorMsg === 'string',
			`Error should be a string, but found (${JSON.stringify(expectedErrorMsg)})`
		);
		assert(!actualErrorMsg.fatal, `A fatal parsing error occurred: ${actualErrorMsg.message}`);
		assert.strictEqual(actualErrorMsg, expectedErrorMsg, msgToText(actualErrorMsg));
	};

	const compareErrorMessagesToExpected = (actualErrorMsgs, expectedErrorMsgs) => {
		assert.strictEqual(
			actualErrorMsgs.length,
			expectedErrorMsgs.length,
			`Should have ${expectedErrorMsgs.length} error${expectedErrorMsgs.length === 1 ? '' : 's'} but had ${
				actualErrorMsgs.length
			}: \n${actualErrorMsgs.map((msg) => msgToText(msg)).join('\n')}`
		);
		const sortedExpectedErrorMsgs = expectedErrorMsgs.sort();
		const sortedActualErrorMsgs = actualErrorMsgs.sort((a, b) => {
			if (a.message < b.message) {
				return -1;
			}
			if (a.message > b.message) {
				return 1;
			}
			return 0;
		});
		sortedActualErrorMsgs.forEach((_, index) =>
			compareSingleErrorMessageToExpected(sortedActualErrorMsgs[index].message, sortedExpectedErrorMsgs[index])
		);
	};

	/**
	 * Check if the template is invalid or not
	 * all invalid cases go through this.
	 * @param {Object} item Item to run the rule against
	 * @returns {void}
	 * @private
	 */
	const testInvalidTemplate = async (item) => {
		assert.ok(item.errors || item.errors === 0, 'Did not specify errors for an invalid test');

		const results = await cli.lintText(item.code);

		report.forEach((result) => {
			compareErrorMessagesToExpected(result.messages, item.errors);
		});
	};

	// testFile should have valid and invalid examples

	describe(ruleName, () => {
		describe('valid', () => {
			testFile.valid.forEach((valid) => {
				it(valid, async () => {
					await testValidTemplate(valid);
				});
			});
		});

		describe('invalid', () => {
			testFile.invalid.forEach((invalid) => {
				if (typeof invalid.code !== 'string') {
					assert.fail('Did not specify errors for an invalid test');
				}
				it(invalid.code, async () => {
					await testInvalidTemplate(invalid);
				});
			});
		});
	});
};

module.exports = configTester;
