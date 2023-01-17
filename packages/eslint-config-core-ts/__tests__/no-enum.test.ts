import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'typescript-enum/no-enum';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should disallow the use of all types of TypeScript enums', () =>
	validate(
		`enum Foo {
			Bar,
			Baz,
		}

		const enum Foo {
			Bar = "Bar",
			Baz = "Baz",
		}

		enum Foo {
			Bar = "BAR",
			Baz = "BAZ",
		}`,
		[],
		[
			'In modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
			'In modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
			'In modern TypeScript, you may not need an enum when an object with `as const` could suffice.',
		]
	));

test.run();
