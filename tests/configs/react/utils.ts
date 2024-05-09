import { TSESLint } from '@typescript-eslint/utils';
import eslintConfig from '../../../src/configs/react';
import { getTester } from '../../utils';

export const getReactTester = (
	ruleName: string,
	configOverride: TSESLint.ESLint.ESLintOptions['baseConfig'] = {}
): ReturnType<typeof getTester> => {
	return getTester({
		filePath: __filename,
		eslintConfig: {
			...eslintConfig,
			...configOverride,
		},
		ruleName: ruleName,
	});
};
