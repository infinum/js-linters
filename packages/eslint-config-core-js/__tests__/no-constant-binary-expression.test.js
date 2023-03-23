import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'no-constant-binary-expression';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test(`should disallow expressions where the operation doesn't affect the value 1`, () =>
	validate(`const value1 = +x == null;`, [
		'Unexpected constant binary expression. Compares constantly with the right-hand side of the `==`.',
	]));

test(`should disallow expressions where the operation doesn't affect the value 2`, () =>
	validate(`const value2 = condition ? x : {} || DEFAULT;`, [
		'Unexpected constant truthiness on the left-hand side of a `||` expression.',
	]));

test(`should disallow expressions where the operation doesn't affect the value 3`, () =>
	validate(`const value3 = !foo == null;`, [
		'Unexpected constant binary expression. Compares constantly with the right-hand side of the `==`.',
	]));

test(`should disallow expressions where the operation doesn't affect the value 4`, () =>
	validate(`const value4 = new Boolean(foo) === true;`, [
		'Unexpected constant binary expression. Compares constantly with the right-hand side of the `===`.',
	]));

test(`should disallow expressions where the operation doesn't affect the value 5`, () =>
	validate(`const objIsEmpty = someObj === {};`, [
		'Unexpected comparison to newly constructed object. These two values can never be equal.',
	]));

test(`should disallow expressions where the operation doesn't affect the value 6`, () =>
	validate(`const arrIsEmpty = someArr === [];`, [
		'Unexpected comparison to newly constructed object. These two values can never be equal.',
	]));

test.run();
