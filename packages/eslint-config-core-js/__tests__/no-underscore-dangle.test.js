import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'no-underscore-dangle',
});

test('should allow variable names not starting with underscore', () =>
	tester.valid(`
const a = "test";
const b = 2;
`));

test('should allow variable names containing underscore', () =>
	tester.valid(`
const a_1 = "test";
const b_1 = 2;
`));

test('should allow properties of `this` with names with dangling underscore', () =>
	tester.valid(`
  var a = this.foo_;
  this._bar();
`));

test('should not allow variables starting or ending with underscore', () =>
	tester.invalid(
		`
  const a_ = "test";
  const _b = 2;`,
		[`Unexpected dangling '_' in '_b'.`, `Unexpected dangling '_' in 'a_'.`]
	));

test('should not allow variables starting or ending with underscore', () =>
	tester.invalid(
		`var a = this.foo_;
    const a_ = "test";
    const _b = 2;
    this._bar();
`,
		[`Unexpected dangling '_' in '_b'.`, `Unexpected dangling '_' in 'a_'.`]
	));

test.run();
