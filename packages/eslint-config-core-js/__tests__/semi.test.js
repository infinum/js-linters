import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'semi';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow expressions ending with semicolon', () => validate(`var website = "eslint.org";`));

test('should disallow expressions without semicolon at the end', () =>
	validate(`var website = "eslint.org"`, ['Missing semicolon.']));

test.run();
