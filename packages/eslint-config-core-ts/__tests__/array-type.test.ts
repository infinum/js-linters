import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/array-type';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should allow generic style for array definitions', () =>
	validate(`
const x: Array<string> = ['a', 'b'];
`));

test('should allow generic style for readonly array definitions', () =>
	validate(`
const y: ReadonlyArray<string> = ['a', 'b'];
`));

test('should disallow array style for array definitions', () =>
	validate(
		`
	const x: string[] = ['a', 'b'];
	`,
		["Array type using 'string[]' is forbidden. Use 'Array<string>' instead."]
	));

test('should disallow array style for readonly array definitions', () =>
	validate(
		`
	const y: readonly string[] = ['a', 'b'];
	`,
		["Array type using 'string[]' is forbidden. Use 'Array<string>' instead."]
	));

test.run();
