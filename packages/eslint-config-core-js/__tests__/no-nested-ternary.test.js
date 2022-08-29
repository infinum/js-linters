import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'no-nested-ternary';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should not allow nested ternary expressions 1', () =>
	validate(`var thing = foo ? bar : baz === qux ? quxx : foobar;`, ['Do not nest ternary expressions.']));

test('should not allow nested ternary expressions 2', () =>
	validate(`var thing = foo ? bar : (baz === qux ? quxx : foobar);`, ['Do not nest ternary expressions.']));

test('should not allow nested ternary expressions 3', () =>
	validate(`foo ? baz === qux ? quxx() : foobar() : bar();`, ['Do not nest ternary expressions.']));

test.run();
