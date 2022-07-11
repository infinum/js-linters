import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'react-hooks/rules-of-hooks',
});

test(`should allow calling hooks in a custom hook`, () =>
	tester.valid(`
	const useSomething = (bar) => {
		const [count] = useState(bar);
			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

		return calculation;
		}
`));

test(`should allow calling hooks in a component`, () =>
	tester.valid(
		`
		const MyComponent = ({bar}) => {
			const [count] = useState(bar);

			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

			return (<div>{calculation}</div>);
		}
		`,
		[`React Hook useMemo has a missing dependency: 'count'. Either include it or remove the dependency array.`]
	));

test(`should allow calling custom hooks from a component`, () =>
	tester.valid(
		`
		const useSomething = (bar) => {
			const [count] = useState(bar);
			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

			return calculation;
		};

		const MyComponent = ({bar}) => {
			const calculation = useSomething(bar)

			return (<div>{calculation}</div>);
		}
		`,
		[`React Hook useMemo has a missing dependency: 'count'. Either include it or remove the dependency array.`]
	));

test(`should disallow calling hooks conditionally`, () =>
	tester.invalid(
		`
		const useSomething = (bar) => {
			if(bar) {

				const [count] = useState(bar);
			}

				const calculation = useMemo(()=> {
					expensiveCalculation(count);
				}, [count]);

			return calculation;
		}
		`,
		[
			`React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.`,
		]
	));

test(`should disallow calling hooks in a loop`, () =>
	tester.invalid(
		`
		const useSomething = (bar) => {
			const [count] = useState(bar);

			for(let i = 0; i < bar; i++) {

				const calculation = useMemo(()=> {
					expensiveCalculation(count);
				}, [count]);
			}

			return calculation;
		}
		`,
		[
			`React Hook "useMemo" may be executed more than once. Possibly because it is called in a loop. React Hooks must be called in the exact same order in every component render.`,
		]
	));

test(`should disallow calling hooks in a nested function`, () =>
	tester.invalid(
		`
		const notAHookFunction = (count) => {
			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

			return calculation;
		};

		const useSomething = (bar) => {
			const [count] = useState(bar);
			const calculation = notAHookFunction(count)

			return calculation;
		}
		`,
		[
			`React Hook "useMemo" is called in function "notAHookFunction" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".`,
		]
	));

test(`should disallow calling hooks in a function from a component`, () =>
	tester.invalid(
		`
		const notAHookFunction = (count) => {
			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

			return calculation;
		};

		const MyComponent = ({bar}) => {
			const [count] = useState(bar);

			const calculation = notAHookFunction(count);

			return (<div>{calculation}</div>);
		}
		`,
		[
			`React Hook "useMemo" is called in function "notAHookFunction" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".`,
		]
	));

test.run();
