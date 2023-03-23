import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'react/self-closing-comp';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should warn when a component has no children and it is not using selfclose syntax', () =>
	validate(
		`
	const MyComponent = ({children}) => {
		return <div>{children}</div>;
	}

	const App = () => <MyComponent></MyComponent>;
	`,
		[],
		['Empty components are self-closing']
	));

test('should allow when a component has no children and it is using selfclose syntax', () =>
	validate(`
	const MyComponent = ({children}) => {
		return <div>{children}</div>;
	}

	const App = () => <MyComponent />;
	`));

test('should allow when a component has children', () =>
	validate(`
	const MyComponent = ({children}) => {
		return <div>{children}</div>;
	}

	const App = () => (
		<MyComponent>
			Child
		</MyComponent>
	);
	`));

test('should warn when a HTML element has no children and it is not using selfclose syntax', () =>
	validate(
		`
	const App = () => <div></div>;
	`,
		[],
		['Empty components are self-closing']
	));

test('should warn when a HTML element has no children and it is not using selfclose syntax', () =>
	validate(`
	const App = () => <div />;
	`));

test('should allow when a HTML element has children', () =>
	validate(`
	const App = () => <div>Text</div>;
	`));

test.run();
