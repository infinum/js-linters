import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'react-hooks/exhaustive-deps',
});

test(`should show error when there's missing deps on Chakra UI useSafeLayoutEffect`, () =>
	tester.invalid(
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

test.run();
