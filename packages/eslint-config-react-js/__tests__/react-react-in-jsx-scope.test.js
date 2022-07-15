import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'react/react-in-jsx-scope';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test(`should allow JSX without React in scope`, () =>
	validate(
		`
    var Hello = <div>Hello {name}</div>;
		`
	));

test.run();
