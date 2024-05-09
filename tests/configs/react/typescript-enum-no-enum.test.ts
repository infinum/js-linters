import { getReactTester } from './utils';

const ruleName = 'typescript-enum/no-enum';

const { test, validate } = getReactTester(ruleName, { parser: '@typescript-eslint/parser' });

test('should warn for enums without specified values', () =>
	validate(
		`
		enum Foo {
			Bar,
			Baz
		}
		`,
		[],
		['In modern TypeScript, you may not need an enum when an object with `as const` could suffice.']
	));

test('should warn for enums with specified values', () =>
	validate(
		`
			enum Foo {
				Bar = 'Bar',
				Baz = 'Baz'
			}

			enum Foo {
				Bar = "BAR",
				Baz = "BAZ",
			}
			`,
		[],
		[
			'In modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
			'In modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
		]
	));

test('should not warn for consts', () =>
	validate(
		`
		const Foo = {
			Bar: 0,
			Baz: 1,
		} as const;

		type Foo = "Bar" | "Baz";

		const Foo = {
			Bar: "BAR",
			Baz: "BAZ",
		} as const;
		`,
		[],
		[]
	));

test.run();
