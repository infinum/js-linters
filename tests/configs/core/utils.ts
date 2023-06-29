import { getTester } from '../../utils';
import eslintConfig from '../../../src/configs/core';

export const getCoreTester = (ruleName: string) => {
	return getTester({
		filePath: __filename,
		eslintConfig,
		ruleName: ruleName,
	});
};
