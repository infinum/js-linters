import { getCoreTester } from './utils';

const ruleName = 'max-len';

const { test, validate } = getCoreTester(ruleName);

test('should not warn for long import line', () => validate(`import a from '${'a'.repeat(120)}';`, []));

test('should warn for long line other than import line', () =>
	validate(`var a = '${'a'.repeat(120)}';`, ['This line has a length of 131. Maximum allowed is 120.']));

test.run();
