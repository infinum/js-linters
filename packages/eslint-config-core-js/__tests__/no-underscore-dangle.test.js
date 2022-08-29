import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'no-underscore-dangle';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow variable names not starting with underscore', () =>
	validate(`
const a = "test";
const b = 2;
`));

test('should allow variable names containing underscore', () =>
	validate(`
const a_1 = "test";
const b_1 = 2;
`));

test('should allow properties of `this` with names with dangling underscore', () =>
	validate(`
  var a = this.foo_;
  this._bar();
`));

test('should not allow variables starting or ending with underscore', () =>
	validate(
		`
  const a_ = "test";
  const _b = 2;
	`,
		[`Unexpected dangling '_' in '_b'.`, `Unexpected dangling '_' in 'a_'.`]
	));

test('should not allow variables starting or ending with underscore', () =>
	validate(
		`
	var a = this.foo_;
	const a_ = "test";
	const _b = 2;
	this._bar();
	`,
		[`Unexpected dangling '_' in '_b'.`, `Unexpected dangling '_' in 'a_'.`]
	));

test.run();
