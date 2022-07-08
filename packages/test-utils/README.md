# test-utils

Private package exports utilities testing eslint rules.

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
