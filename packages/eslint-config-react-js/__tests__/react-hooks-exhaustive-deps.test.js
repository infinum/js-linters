import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'react-hooks/exhaustive-deps';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test(`should disallow selective use of hook dependencies in custom hooks`, () =>
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

test(`should disallow selective use of hook dependencies in component`, () =>
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
