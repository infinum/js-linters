import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'semi',
});

test('should allow expressions ending with semicolon', () => tester.valid(`var website = "eslint.org";`));

test('should disallow expressions without semicolon at the end', () =>
	tester.invalid(`var website = "eslint.org"`, ['Missing semicolon.']));

test.run();
