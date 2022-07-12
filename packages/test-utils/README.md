# test-utils

Private package that exports utilities for testing eslint rules.

- for each rule added to the config create a `__tests__/rule-name.test.js` file with tests for that rule:

```js
import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

const ruleName = 'some-rule-name';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: ruleName,
});

test('should disallow ...', () => tester.invalid(`code`, ['Rule error message']));

test.run();
```
