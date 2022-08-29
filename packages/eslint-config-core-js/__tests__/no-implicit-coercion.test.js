import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'no-implicit-coercion';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should disallow shorthand type conversions to boolean', () =>
	validate(
		`var foo = null;
		var b = !!foo;
		`,
		['use `Boolean(foo)` instead.']
	));

test('should disallow shorthand type conversions to boolean using bitwise NOT operator', () =>
	validate(
		`var foo = null;
		var b = ~foo.indexOf(".");
		`,
		['use `foo.indexOf(".") !== -1` instead.']
	));

test('should disallow shorthand type conversions to number (1)', () =>
	validate(
		`var foo = null;
		var n = +foo;
		`,
		['use `Number(foo)` instead.']
	));

test('should disallow shorthand type conversions to number (2)', () =>
	validate(
		`var foo = null;
		var n = 1 * foo;
		`,
		['use `Number(foo)` instead.']
	));

test('should disallow shorthand type conversions to string using concatenation', () =>
	validate(
		`var foo = null;
		var s = "" + foo;
	`,
		['use `String(foo)` instead.']
	));

test('should disallow shorthand type conversions to string', () =>
	validate(
		`var foo = null;
		foo += "";
		`,
		['use `foo = String(foo)` instead.']
	));

test.run();
