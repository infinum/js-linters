import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'no-implicit-coercion',
});

test('should disallow shorthand type conversions to boolean', () =>
	tester.invalid(
		`var foo = null;
		var b = !!foo;
		`,
		['use `Boolean(foo)` instead.']
	));

test('should disallow shorthand type conversions to boolean using bitwise NOT operator', () =>
	tester.invalid(
		`var foo = null;
		var b = ~foo.indexOf(".");
		`,
		['use `foo.indexOf(".") !== -1` instead.']
	));

test('should disallow shorthand type conversions to number (1)', () =>
	tester.invalid(
		`var foo = null;
		var n = +foo;
		`,
		['use `Number(foo)` instead.']
	));

test('should disallow shorthand type conversions to number (2)', () =>
	tester.invalid(
		`var foo = null;
		var n = 1 * foo;
		`,
		['use `Number(foo)` instead.']
	));

test('should disallow shorthand type conversions to string using concatenation', () =>
	tester.invalid(
		`var foo = null;
		var s = "" + foo;
	`,
		['use `String(foo)` instead.']
	));

test('should disallow shorthand type conversions to string', () =>
	tester.invalid(
		`var foo = null;
		foo += "";
		`,
		['use `foo = String(foo)` instead.']
	));

test.run();
