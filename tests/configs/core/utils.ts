import eslintConfig from '../../../src/configs/core';
import { getTester } from '../../utils';

export const getCoreTester = (ruleName: string) => {
	return getTester({
		filePath: __filename,
		eslintConfig,
		ruleName: ruleName,
	});
};
