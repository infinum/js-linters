import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'react-hooks/exhaustive-deps',
});

test(`should disallow selective use of hook dependancies in custom hooks`, () =>
	tester.invalid(
		`
		const useSomething = (bar) => {
			const [count] = useState(bar);

			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, []);

			return calculation;
		}
		`,
		[`React Hook useMemo has a missing dependency: 'count'. Either include it or remove the dependency array.`]
	));

test(`should disallow selective use of hook dependancies in component`, () =>
	tester.invalid(
		`
		const MyComponent = ({bar}) => {
			var countState = useState(bar);
			var count = counterState[0];

			var calculation = useMemo(function() {
				return expensiveCalculation(count);
			}, []);

			return (<div>{calculation}</div>);
		}
		`,
		[`React Hook useMemo has a missing dependency: 'count'. Either include it or remove the dependency array.`]
	));

test.run();
