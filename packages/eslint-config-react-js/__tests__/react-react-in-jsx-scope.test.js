import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'react/react-in-jsx-scope',
});

test(`should allow JSX without React in scope`, () =>
	tester.valid(
		`
    var Hello = <div>Hello {name}</div>;
		`
	));

test.run();
