import { getReactTester } from './utils';

const ruleName = 'react-hooks/exhaustive-deps';

const { test, validate } = getReactTester(ruleName);

test(`should disallow selective use of hook dependancies in custom hooks`, () =>
	validate(
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
	validate(
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

test(`should show error when there's missing deps on Chakra UI useSafeLayoutEffect`, () =>
	validate(
		`
			const Test = (bar) => {
				const [width, setWidth] = useState(0);

				useSafeLayoutEffect(() => {
					setWidth(width);
				}, []);

				return <input ref={ref} />;
			}`,
		[
			"React Hook useSafeLayoutEffect has a missing dependency: 'width'. Either include it or remove the dependency array. You can also do a functional update 'setWidth(w => ...)' if you only need 'width' in the 'setWidth' call.",
		]
	));

test(`should show error when there's missing deps on Chakra UI useUpdateEffect`, () =>
	validate(
		`
			const Test = (bar) => {
				const [width, setWidth] = useState(0);

				useUpdateEffect(() => {
					setWidth(width);
				}, []);

				return <input ref={ref} />;
			}`,
		[
			"React Hook useUpdateEffect has a missing dependency: 'width'. Either include it or remove the dependency array. You can also do a functional update 'setWidth(w => ...)' if you only need 'width' in the 'setWidth' call.",
		]
	));

test.run();
