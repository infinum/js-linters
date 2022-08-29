import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'react-hooks/exhaustive-deps';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

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

test.run();
