import { getReactTester } from './utils';

const ruleName = 'react/react-in-jsx-scope';

const { test, validate } = getReactTester(ruleName);

test(`should allow JSX without React in scope`, () =>
	validate(
		`
    var Hello = <div>Hello {name}</div>;
		`
	));

test.run();
