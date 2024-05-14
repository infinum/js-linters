import { getTypescriptTester } from './utils';

const ruleName = '@typescript-eslint/naming-convention';

const { test, validate } = getTypescriptTester(ruleName);

/**
 * Interface
 */
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

/**
 * Enum
 */
test('should allow PascalCase enum naming', () =>
	validate(`
		enum TestEnum {
			Foo,
			Bar,
			FooBar,
			BarFoo,
		}
`));

test('should disallow non-PascalCase enum naming', () =>
	validate(
		`
			enum testEnum {
				foo,
				bar,
				fooBar,
				barFoo,
			}
		`,
		[
			'Enum name `testEnum` must match one of the following formats: StrictPascalCase',
			'Enum Member name `foo` must match one of the following formats: StrictPascalCase',
			'Enum Member name `bar` must match one of the following formats: StrictPascalCase',
			'Enum Member name `fooBar` must match one of the following formats: StrictPascalCase',
			'Enum Member name `barFoo` must match one of the following formats: StrictPascalCase',
		]
	));

/**
 * Boolean variable naming
 */
test('should allow StrictPascalCase boolean variable naming with is, should, has prefix', async () => {
	await validate(`const isTest = true;`);
	await validate(`const shouldTest = true;`);
	await validate(`const hasTest = true;`);
});

test('should disallow non-StrictPascalCase boolean variable naming with is, should, has prefix', async () => {
	await validate(`const istest = true;`, [
		'Variable name `istest` trimmed as `test` must match one of the following formats: StrictPascalCase',
	]);
	await validate(`const shouldtest = true;`, [
		'Variable name `shouldtest` trimmed as `test` must match one of the following formats: StrictPascalCase',
	]);
	await validate(`const hastest = true;`, [
		'Variable name `hastest` trimmed as `test` must match one of the following formats: StrictPascalCase',
	]);
});

/**
 * modifier: destructured - boolean variable naming
 */
test('should allow destructed boolean variable naming without is, should, has prefix', async () =>
	validate(`const { test } = { test: true };`));

test('should allow destructed boolean variable naming without is, should, has prefix', async () => {
	await validate(`const { test: isTest } = { test: true };`);
	await validate(`const { test: shouldTest } = { test: true };`);
	await validate(`const { test: hasTest } = { test: true };`);
});

test('should disallow destructed renamed boolean variable naming without is, should, has prefix', () =>
	validate(`const { test: test2 } = { test: true };`, [
		'Variable name `test2` must have one of the following prefixes: is, should, has',
	]));

/**
 * typeLike
 */
test('should allow PascalCase class naming', () => validate(`class TestClass {}`));

test('should disallow non-PascalCase class naming', () =>
	validate(`class testClass {}`, ['Class name `testClass` must match one of the following formats: StrictPascalCase']));

test('should allow PascalCase typeParameter naming', () => validate(`type TestType<T> = T;`));

test('should disallow non-PascalCase typeParameter naming', () =>
	validate(`type TestType<t> = t;`, [
		'Type Parameter name `t` must match one of the following formats: StrictPascalCase',
	]));

test('should allow PascalCase typeAlias naming', () => validate(`type TestType = string;`));

test('should disallow non-PascalCase typeAlias naming', () =>
	validate(`type testType = string;`, [
		'Type Alias name `testType` must match one of the following formats: StrictPascalCase',
	]));

test.run();
