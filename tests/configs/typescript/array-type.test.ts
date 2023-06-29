import { getTypescriptTester } from './utils';

const ruleName = '@typescript-eslint/array-type';

const { test, validate } = getTypescriptTester(ruleName);

test('should allow generic style for array definitions', () =>
	validate(`
const x: Array<string> = ['a', 'b'];
`));

test('should allow generic style for readonly array definitions', () =>
	validate(`
const y: ReadonlyArray<string> = ['a', 'b'];
`));

test('should disallow array style for array definitions', () =>
	validate(
		`
	const x: string[] = ['a', 'b'];
	`,
		["Array type using 'string[]' is forbidden. Use 'Array<string>' instead."]
	));

test('should disallow array style for readonly array definitions', () =>
	validate(
		`
	const y: readonly string[] = ['a', 'b'];
	`,
		["Array type using 'readonly string[]' is forbidden. Use 'ReadonlyArray<string>' instead."]
	));

test.run();
