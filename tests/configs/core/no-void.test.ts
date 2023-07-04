import { getCoreTester } from './utils';

const ruleName = 'no-void';

const { test, validate } = getCoreTester(ruleName);

test('should disallow void operators 1', () => validate(`void foo;`, [`Expected 'undefined' and instead saw 'void'.`]));

test('should disallow void operators 2', () =>
	validate(`void someFunction();`, [`Expected 'undefined' and instead saw 'void'.`]));

test('should disallow void operators 3', () =>
	validate(`var foo = void bar();`, [`Expected 'undefined' and instead saw 'void'.`]));

test('should disallow void operators 4', () =>
	validate(
		`function baz() {
			return void 0;
		}`,
		[`Expected 'undefined' and instead saw 'void'.`]
	));

test.run();
