import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'no-void',
});

test('should disallow void operators 1', () =>
	tester.invalid(`void foo;`, [`Expected 'undefined' and instead saw 'void'.`]));

test('should disallow void operators 2', () =>
	tester.invalid(`void someFunction();`, [`Expected 'undefined' and instead saw 'void'.`]));

test('should disallow void operators 3', () =>
	tester.invalid(`var foo = void bar();`, [`Expected 'undefined' and instead saw 'void'.`]));

test('should disallow void operators 4', () =>
	tester.invalid(
		`function baz() {
			return void 0;
		}`,
		[`Expected 'undefined' and instead saw 'void'.`]
	));

test.run();
