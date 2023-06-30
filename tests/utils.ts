import { TSESLint } from '@typescript-eslint/utils';
import { suite } from 'uvu';
import * as assert from 'uvu/assert';

interface ICliOptions {
	/**
	 * Rule name that we are testing
	 */
	ruleName: string;
	eslintConfig: TSESLint.ESLint.ESLintOptions['baseConfig'];
}

/*
 * This function is used to extract the plugin name from the extension.
 * For example, if the extension is `plugin:@typescript-eslint/recommended`,
 * the plugin name will be `@typescript-eslint`.
 *
 * If the extension is `plugin:@next/next/recommended`, the plugin name will be `@next/next`.
 *
 * @param extension - The extension to extract the plugin name from.
 * @returns The plugin name.
 */
const extractPluginName = (extension: string): string => {
	const pluginName = extension.split('plugin:')[1].split('/');

	pluginName.pop();

	return pluginName.join('/');
};

const getCli = ({ ruleName, eslintConfig }: ICliOptions) => {
	const baseConfig = { ...eslintConfig };

	if (!baseConfig.plugins) {
		baseConfig.plugins = [];
	}

	if (Array.isArray(baseConfig.extends)) {
		baseConfig.extends.forEach((extension) => {
			if (extension.startsWith('plugin:')) {
				baseConfig.plugins!.push(extractPluginName(extension));
			}
		});
	} else if (baseConfig.extends) {
		baseConfig.plugins!.push(extractPluginName(baseConfig.extends));
	}

	baseConfig.extends = [];
	baseConfig.rules = {
		[ruleName]: eslintConfig?.rules?.[ruleName],
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
	expectedErrorMsgs: Array<string>,
	severity: MessageSeverity = MessageSeverity.Error
) => {
	assert.is(
		actualErrorMsgs.length,
		expectedErrorMsgs.length,
		`Should have ${expectedErrorMsgs.length} ${severity === MessageSeverity.Error ? 'error' : 'warning'}${
			expectedErrorMsgs.length === 1 ? '' : 's'
		} but had ${actualErrorMsgs.length}: \n\n${actualErrorMsgs.map((msg) => msgToText(msg)).join('\n\n')}`
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

enum MessageSeverity {
	Warning = 1,
	Error = 2,
}

const groupBySeverity = (results: Array<TSESLint.ESLint.LintResult>) =>
	results.reduce(
		(
			aggregate: {
				errors: Array<TSESLint.ESLint.LintMessage>;
				warnings: Array<TSESLint.ESLint.LintMessage>;
			},
			result
		) => {
			const messages = result.messages.reduce(
				(
					agg: { errors: Array<TSESLint.ESLint.LintMessage>; warnings: Array<TSESLint.ESLint.LintMessage> },
					message: TSESLint.ESLint.LintMessage
				) => {
					if (message.severity === MessageSeverity.Warning) {
						agg.warnings.push(message);
					}
					if (message.severity === MessageSeverity.Error) {
						agg.errors.push(message);
					}
					return agg;
				},
				{ warnings: [], errors: [] }
			);

			aggregate.errors.push(...messages.errors);
			aggregate.warnings.push(...messages.warnings);

			return aggregate;
		},
		{ errors: [], warnings: [] }
	);

export const getTester = (options: ITesterOptions) => {
	const { filePath, ...cliOptions } = options;
	const cli = getCli(cliOptions);

	const validate = async (code: string, expectedErrors: Array<string> = [], expectedWarnings: Array<string> = []) => {
		const results = await cli.lintText(code, { filePath: __filename });
		const { errors, warnings } = groupBySeverity(results);

		compareErrorMessagesToExpected(errors, expectedErrors);
		compareErrorMessagesToExpected(warnings, expectedWarnings, MessageSeverity.Warning);
	};

	return {
		validate,
		test: suite(cliOptions.ruleName),
	};
};
