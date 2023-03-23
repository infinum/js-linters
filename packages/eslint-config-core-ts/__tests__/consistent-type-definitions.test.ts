import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/consistent-type-definitions';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

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
