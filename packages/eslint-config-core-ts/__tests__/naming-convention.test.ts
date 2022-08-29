import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/naming-convention';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should alow PascalCase interface with I prefix', () => validate(`interface ITestInterface {}`));

test('should disallow PascalCase interface without I prefix', () =>
	validate(`interface TestInterface {}`, ['Interface name `TestInterface` must match the RegExp: /^I[A-Z]/u']));

test.run();
