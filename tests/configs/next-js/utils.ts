import eslintConfig from '../../../src/configs/next-js';
import reactEslintConfig from '../../../src/configs/react';
import { getTester } from '../../utils';

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
