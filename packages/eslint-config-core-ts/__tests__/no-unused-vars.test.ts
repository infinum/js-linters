import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/no-unused-vars';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should disallow the use of unused variables', () =>
	validate(
		`
      const myVar = 42;
    `,
		[`'myVar' is assigned a value but never used.`]
	));

test('should disallow the use of unused variables starting with underscore', () =>
	validate(
		`
      const _myVar = 42;
      `,
		[`'_myVar' is assigned a value but never used.`]
	));

test('should disallow the use of unused function declarations', () =>
	validate(
		`
      function myFunction(a, b) {
        return a || b;
      }
    `,
		[`'myFunction' is defined but never used.`]
	));

test('should allow the use of exported function declarations', () =>
	validate(
		`
      export const myFunction = (a, b) =>  {
        return a || b;
      }
    `
	));

test('should disallow the use of unused function arguments', () =>
	validate(
		`
      export function myFunction(a, b, c) {
        return a || b;
      }
    `,
		[`'c' is defined but never used. Allowed unused args must match /^_/u.`]
	));

test('should allow the use of unused function arguments that start with underscore', () =>
	validate(
		`
      export function myFunction(a, b, _c) {
        return a || b;
      }
    `
	));

test.run();
