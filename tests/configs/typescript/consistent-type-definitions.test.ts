import { getTypescriptTester } from './utils';

const ruleName = '@typescript-eslint/consistent-type-definitions';

const { test, validate } = getTypescriptTester(ruleName);

test('should allow using interface for type definition', () =>
	validate(`
interface IMyInterface {
  a: string;
  b: number;
}
`));

test('should disallow using type for type definition', () =>
	validate(
		`
type MyType = {
  a: string;
  b: number;
}
`,
		['Use an `interface` instead of a `type`.']
	));

test('should allow using type for type aliases', () =>
	validate(
		`
type T = string;
type Foo = string | {};

interface T {
	x: number;
}
		`
	));

test.run();
