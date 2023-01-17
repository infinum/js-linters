import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'typescript-enum/no-const-enum';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should allow the use of non-const TypeScript enums', () =>
	validate(
		`enum Foo {
			Bar,
			Baz,
		}

		enum Foo {
			Bar = "BAR",
			Baz = "BAZ",
		}`
	));

test('should disallow the use of TypeScript const enums', () =>
	validate(
		`const enum Foo {
			Bar = "Bar",
			Baz = "Baz",
		}`,
		[],
		[
			'Unexpected `const` enum, use regular enum instead. As a side note, in modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
		]
	));

test.run();
