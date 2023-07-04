import eslintConfig from '../../../src/configs/typescript';
import { getTester } from '../../utils';

export const getTypescriptTester = (ruleName: string) => {
	return getTester({
		filePath: __filename,
		eslintConfig: {
			...eslintConfig,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		ruleName: ruleName,
	});
};
