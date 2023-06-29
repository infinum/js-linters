import { getReactTester } from './utils';

const ruleName = 'no-param-reassign';

const { test, validate } = getReactTester(ruleName);
test(`should allow with warning reassigning function parameters 1`, () =>
	validate(
		`
		function foo(bar) {
			bar = 13;
		}
		`,
		[],
		[`Assignment to function parameter 'bar'.`]
	));

test(`should allow with warning reassigning function parameters 2`, () =>
	validate(
		`
		function foo(bar) {
				bar++;
		}
		`,
		[],
		[`Assignment to function parameter 'bar'.`]
	));

test(`should allow with warning reassigning function parameters 3`, () =>
	validate(
		`
		function foo(bar) {
				for (bar in baz) {}
		}
		`,
		[],
		[`Assignment to function parameter 'bar'.`]
	));

test.run();
