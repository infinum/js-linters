import { getReactTester } from './utils';

const ruleName = 'consistent-return';

const { test, validate } = getReactTester(ruleName);

test('should allow functions with return statement that always specifies values', () =>
	validate(`
	function doSomething(condition) {
		if (condition) {
				return true;
		} else {
				return false;
		}
	}
`));

test('should allow functions with return statement that never specifies values', () =>
	validate(`
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
	validate(`
	function Foo() {
    if (!(this instanceof Foo)) {
        return new Foo();
    }

    this.a = 0;
	}
`));

test(`should allow with warning functions with return statement that don't always specifiy values 1`, () =>
	validate(
		`
	function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
	}
	`,
		[],
		[`Function 'doSomething' expected a return value.`]
	));

test(`should allow with warning functions with return statement that don't always specifiy values 2`, () =>
	validate(
		`
		function doSomething(condition) {
			if (condition) {
					return true;
			}
		}
		`,
		[],
		[`Expected to return a value at the end of function 'doSomething'.`]
	));

test.run();
