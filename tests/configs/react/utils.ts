import { getTester } from '../../utils';
import eslintConfig from '../../../src/configs/react';

export const getReactTester = (ruleName: string) => {
	return getTester({
		filePath: __filename,
		eslintConfig,
		ruleName: ruleName,
	});
};
