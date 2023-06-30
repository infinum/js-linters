import { getTypescriptTester } from './utils';

const ruleName = '@typescript-eslint/no-inferrable-types';

const { test, validate } = getTypescriptTester(ruleName);

test('should disallow explicit type declarations for variables or parameters initialized to a number', () =>
	validate(
		`const a: number = 10;`,
		[],
		['Type number trivially inferred from a number literal, remove type annotation.']
	));

test('should disallow explicit type declarations for variables or parameters initialized to a string.', () =>
	validate(
		`const a: string = "10";`,
		[],
		['Type string trivially inferred from a string literal, remove type annotation.']
	));

test('should disallow explicit type declarations for variables or parameters initialized to a boolean.', () =>
	validate(
		`const a: boolean = true;`,
		[],
		['Type boolean trivially inferred from a boolean literal, remove type annotation.']
	));

test('should disallow explicit type declarations for variables or parameters initialized to a RegExp.', () =>
	validate(
		`const a: RegExp = RegExp('a');`,
		[],
		['Type RegExp trivially inferred from a RegExp literal, remove type annotation.']
	));

test('should disallow explicit type declarations for variables or parameters initialized to a null.', () =>
	validate(`const a: null = null;`, [], ['Type null trivially inferred from a null literal, remove type annotation.']));

test('should disallow explicit type declarations for variables or parameters initialized to a symbol.', () =>
	validate(
		`const a: symbol = Symbol('a');`,
		[],
		['Type symbol trivially inferred from a symbol literal, remove type annotation.']
	));

test('should disallow explicit type declarations for variables or parameters initialized to a undefined.', () =>
	validate(
		`const a: undefined = undefined;`,
		[],
		['Type undefined trivially inferred from a undefined literal, remove type annotation.']
	));

test('should disallow explicit type declarations for properties initialized to a number.', () =>
	validate(
		`
			class Foo {
				propNumber: number = 5;
			}
	`,
		[],
		['Type number trivially inferred from a number literal, remove type annotation.']
	));

test('should disallow explicit type declarations for properties initialized to a string.', () =>
	validate(
		`
			class Foo {
				propString: string = '5';
			}
	`,
		[],
		['Type string trivially inferred from a string literal, remove type annotation.']
	));

test('should disallow explicit type declarations for properties initialized to a boolean.', () =>
	validate(
		`
			class Foo {
				propBoolean: boolean = false;
			}
	`,
		[],
		['Type boolean trivially inferred from a boolean literal, remove type annotation.']
	));

test('should disallow explicit type declarations for variables or parameters initialized to a number, string or boolean..', () =>
	validate(
		`function fn(a: number = 5, b: boolean = true, c: string = 'sss') {}`,
		[],
		[
			`Type number trivially inferred from a number literal, remove type annotation.`,
			`Type boolean trivially inferred from a boolean literal, remove type annotation.`,
			`Type string trivially inferred from a string literal, remove type annotation.`,
		]
	));

test.run();
