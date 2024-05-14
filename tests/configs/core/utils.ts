import eslintConfig from '../../../src/configs/core';
import { getTester } from '../../utils';

export const getCoreTester = (ruleName: string): ReturnType<typeof getTester> => {
	return getTester({
		filePath: __filename,
		eslintConfig,
		ruleName: ruleName,
	});
};
