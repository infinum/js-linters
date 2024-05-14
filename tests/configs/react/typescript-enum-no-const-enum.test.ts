import { getReactTester } from './utils';

const ruleName = 'typescript-enum/no-const-enum';

const { test, validate } = getReactTester(ruleName, { parser: '@typescript-eslint/parser' });

test('should warn for const enums', () =>
	validate(
		`
		const enum Foo {
			Bar = "Bar",
			Baz = "Baz",
		}
		`,
		[],
		[
			'Unexpected `const` enum, use regular enum instead. As a side note, in modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
		]
	));

test('should not warn for union types', () =>
	validate(
		`
		type Foo = "Bar" | "Baz";
		`,
		[],
		[]
	));

test.run();
