import eslintConfig from '../../../src/configs/react';
import { getTester } from '../../utils';

export const getReactTester = (ruleName: string) => {
	return getTester({
		filePath: __filename,
		eslintConfig,
		ruleName: ruleName,
	});
};
