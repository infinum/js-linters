import { TSESLint } from '@typescript-eslint/utils';
import assert from 'uvu/assert';

interface ICliOptions {
	/**
	 * Rule name that we are testing
	 */
	rule: string;
	eslintConfig: TSESLint.ESLint.ESLintOptions['baseConfig'];
}

const getCli = ({ rule, eslintConfig }: ICliOptions) => {
	const baseConfig = { ...eslintConfig };

	baseConfig.extends = [];
	baseConfig.rules = {
		[rule]: eslintConfig?.rules?.[rule],
	};

	return new TSESLint.ESLint({
		baseConfig,
		useEslintrc: false,
	});
};

const msgToText = (msg: TSESLint.ESLint.LintMessage) => `${msg.line},${msg.column}: ${msg.ruleId} - ${msg.message}`;

const compareSingleErrorMessageToExpected = (actualErrorMsg: TSESLint.ESLint.LintMessage, expectedErrorMsg: string) => {
	assert.type(expectedErrorMsg, 'string', `Error should be a string, but found (${JSON.stringify(expectedErrorMsg)})`);
	assert.is.not(actualErrorMsg.fatal, true, `A fatal parsing error occurred: ${actualErrorMsg.message}`);
	assert.is(actualErrorMsg.message, expectedErrorMsg, msgToText(actualErrorMsg));
};

const compareErrorMessagesToExpected = (
	actualErrorMsgs: Array<TSESLint.ESLint.LintMessage>,
	expectedErrorMsgs: Array<string>
) => {
	assert.is(
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
		compareSingleErrorMessageToExpected(sortedActualErrorMsgs[index], sortedExpectedErrorMsgs[index])
	);
};

interface ITesterOptions extends ICliOptions {
	/**
	 * ESLint expects `filePath` to lint `.ts` files so we need to spoof it.
	 * It should usually be set to `__filename`
	 */
	filePath: string;
}

export const getTester = (options: ITesterOptions) => {
	const { filePath, ...cliOptions } = options;
	const cli = getCli(cliOptions);

	const valid = async (code: string) => {
		const results = await cli.lintText(code, { filePath: __filename });

		const errorCount = results.reduce((count, result) => count + result.errorCount, 0);

		assert.is(
			errorCount,
			0,
			`Should have no errors but had ${errorCount}:\n${results.map((result) =>
				result.messages.map((msg) => msgToText(msg)).join('\n')
			)}`
		);
	};

	const invalid = async (code: string, errors: Array<string>) => {
		const results = await cli.lintText(code, { filePath: __filename });

		results.forEach((result) => {
			compareErrorMessagesToExpected(result.messages, errors);
		});
	};

	return {
		valid,
		invalid,
	};
};
