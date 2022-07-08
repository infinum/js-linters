import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'consistent-return',
});

test('should allow functions with return statement that always specifies values', () =>
	tester.valid(`
	function doSomething(condition) {
		if (condition) {
				return true;
		} else {
				return false;
		}
	}
`));

test('should allow functions with return statement that never specifies values', () =>
	tester.valid(`
	function doSomething(condition) {
		if (condition) {
			console.log('did it');
			return;
		} else {
			console.log('did not do it');
			return;
		}
	}
`));

test(`should allow function definitions where the name begins with an uppercase letter (constructors), with return statement that doesn't always specify values`, () =>
	tester.valid(`
	function Foo() {
    if (!(this instanceof Foo)) {
        return new Foo();
    }

    this.a = 0;
	}
`));

test(`should disallow functions with return statement that don't always specifiy values 1`, () =>
	tester.invalid(
		`
	function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
	}
	`,
		[`Function 'doSomething' expected a return value.`]
	));

test(`should disallow functions with return statement that don't always specifiy values 2`, () =>
	tester.invalid(
		`
		function doSomething(condition) {
			if (condition) {
					return true;
			}
		}
		`,
		[`Expected to return a value at the end of function 'doSomething'.`]
	));

test.run();
