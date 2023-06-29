import { getCoreTester } from './utils';

const ruleName = 'semi';

const { test, validate } = getCoreTester(ruleName);

test('should allow expressions ending with semicolon', () => {
	validate(`var website = "eslint.org";`);
});

test('should disallow expressions without semicolon at the end', () => {
	validate(`var website = "eslint.org"`, ['Missing semicolon.']);
});

test.run();
