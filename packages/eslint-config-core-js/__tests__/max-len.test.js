import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'max-len';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should not warn for long import line', () => validate(`import a from '${'a'.repeat(120)}';`, []));

test('should warn for long line other than import line', () =>
	validate(`var a = '${'a'.repeat(120)}';`, ['This line has a length of 131. Maximum allowed is 120.']));

test.run();
