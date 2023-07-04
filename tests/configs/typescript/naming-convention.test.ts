import { getTypescriptTester } from './utils';

const ruleName = '@typescript-eslint/naming-convention';

const { test, validate } = getTypescriptTester(ruleName);

test('should alow PascalCase interface with I prefix', () => validate(`interface ITestInterface {}`));

test('should disallow PascalCase interface without I prefix', () =>
	validate(`interface TestInterface {}`, ['Interface name `TestInterface` must match the RegExp: /^I[A-Z]/u']));

test('should disallow non-PascalCase interface with I prefix (1)', () =>
	validate(`interface ITest_Interface {}`, [
		'Interface name `ITest_Interface` must match one of the following formats: PascalCase',
	]));

test('should disallow non-PascalCase interface with I prefix (2)', () =>
	validate(`interface ItestInterface {}`, ['Interface name `ItestInterface` must match the RegExp: /^I[A-Z]/u']));

test('should disallow non-PascalCase interface without I prefix', () =>
	validate(`interface Test_Interface {}`, ['Interface name `Test_Interface` must match the RegExp: /^I[A-Z]/u']));

test.run();
