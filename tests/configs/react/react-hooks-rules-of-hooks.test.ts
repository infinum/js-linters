import { getReactTester } from './utils';

const ruleName = 'react-hooks/rules-of-hooks';

const { test, validate } = getReactTester(ruleName);

test(`should allow calling hooks in a custom hook`, () =>
	validate(`
	const useSomething = (bar) => {
		const [count] = useState(bar);
			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

		return calculation;
		}
`));

test(`should allow calling hooks in a component`, () =>
	validate(
		`
		const MyComponent = ({bar}) => {
			const [count] = useState(bar);

			const calculation = useMemo(()=> {
				expensiveCalculation(count);
			}, [count]);

			return (<div>{calculation}</div>);
		}
		`
	));

test(`should allow calling custom hooks from a component`, () =>
	validate(
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
		`
	));

test(`should disallow calling hooks conditionally`, () =>
	validate(
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
	validate(
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
	validate(
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
	validate(
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
