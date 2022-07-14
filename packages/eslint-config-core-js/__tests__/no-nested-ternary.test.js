import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'no-nested-ternary',
});

test('should not allow nested ternary expressions 1', () =>
	tester.invalid(`var thing = foo ? bar : baz === qux ? quxx : foobar;`, ['Do not nest ternary expressions.']));

test('should not allow nested ternary expressions 2', () =>
	tester.invalid(`var thing = foo ? bar : (baz === qux ? quxx : foobar);`, ['Do not nest ternary expressions.']));

test('should not allow nested ternary expressions 3', () =>
	tester.invalid(`foo ? baz === qux ? quxx() : foobar() : bar();`, ['Do not nest ternary expressions.']));

test.run();
