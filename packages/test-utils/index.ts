import { TSESLint } from '@typescript-eslint/utils';
import assert from 'uvu/assert';

type BaseConfig = TSESLint.ESLint.ESLintOptions['baseConfig'];

const getTestRuleDefinitions = (config: BaseConfig, ruleNames: Array<string>) =>
	ruleNames.reduce((rulesConfig: Partial<Record<string, TSESLint.Linter.RuleEntry>>, ruleName) => {
		const definition = config?.rules?.[ruleName];
		if (definition) {
			rulesConfig[ruleName] = definition;
		}
		return rulesConfig;
	}, {});

interface ICliOptions {
	/**
	 * Rule name or names that we are testing
	 */
	rule: string | Array<string>;
	eslintConfig: BaseConfig;
}
const getCli = ({ rule, eslintConfig }: ICliOptions) => {
	const baseConfig = { ...eslintConfig };

	baseConfig.extends = [];
	const ruleNames = Array.isArray(rule) ? rule : [rule];
	baseConfig.rules = getTestRuleDefinitions(baseConfig, ruleNames);

	baseConfig.overrides = baseConfig.overrides?.map((override) => ({
		...override,
		extends: [],
		rules: getTestRuleDefinitions(override, ruleNames),
	}));

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

	const validate = async (code: string, expectedErrors: Array<string> = [], expectedWarnings: Array<string> = []) => {
		const results = await cli.lintText(code, { filePath });
		const { errors, warnings } = groupBySeverity(results);

		compareErrorMessagesToExpected(errors, expectedErrors);
		compareErrorMessagesToExpected(warnings, expectedWarnings, MessageSeverity.Warning);
	};

	return {
		validate,
	};
};
