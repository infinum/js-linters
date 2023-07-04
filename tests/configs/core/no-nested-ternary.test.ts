import { getCoreTester } from './utils';

const ruleName = 'no-nested-ternary';

const { test, validate } = getCoreTester(ruleName);

test('should not allow nested ternary expressions 1', () =>
	validate(`var thing = foo ? bar : baz === qux ? quxx : foobar;`, ['Do not nest ternary expressions.']));

test('should not allow nested ternary expressions 2', () =>
	validate(`var thing = foo ? bar : (baz === qux ? quxx : foobar);`, ['Do not nest ternary expressions.']));

test('should not allow nested ternary expressions 3', () =>
	validate(`foo ? baz === qux ? quxx() : foobar() : bar();`, ['Do not nest ternary expressions.']));

test.run();
