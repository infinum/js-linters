import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule: '@typescript-eslint/naming-convention',
});

test('should alow PascalCase interface with I prefix', () => tester.valid(`interface ITestInterface {}`));

test('should disallow PascalCase interface without I prefix', () =>
	tester.invalid(`interface TestInterface {}`, ['Interface name `TestInterface` must match the RegExp: /^I[A-Z]/u']));

test.run();
