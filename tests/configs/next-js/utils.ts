import { getTester } from '../../utils';
import reactEslintConfig from '../../../src/configs/react';
import eslintConfig from '../../../src/configs/next-js';

export const getNextJsTester = (ruleName: string) => {
	return getTester({
		filePath: __filename,
		eslintConfig: {
			...reactEslintConfig,
			...eslintConfig,
		},
		ruleName: ruleName,
	});
};
