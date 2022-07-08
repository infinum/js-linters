import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'no-param-reassign',
});

test(`should disallow disallow reassigning function parameters 1`, () =>
	tester.invalid(
		`
		function foo(bar) {
			bar = 13;
		}
		`,
		[`Assignment to function parameter 'bar'.`]
	));

test(`should disallow disallow reassigning function parameters 2`, () =>
	tester.invalid(
		`
		function foo(bar) {
				bar++;
		}
		`,
		[`Assignment to function parameter 'bar'.`]
	));

test(`should disallow disallow reassigning function parameters 3`, () =>
	tester.invalid(
		`
		function foo(bar) {
				for (bar in baz) {}
		}
		`,
		[`Assignment to function parameter 'bar'.`]
	));

test.run();
