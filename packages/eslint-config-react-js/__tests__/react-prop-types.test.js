import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'react/prop-types',
});

test(`should allow React component definition with full props validation`, () =>
	tester.valid(
		`
		const MyComponent = ({name, value}) =>  {
      const [count, setCount] = useState(value);

      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <p>
          {name}
          <a href="javascript:void(0)" onClick={handleClick}>{count}</a>
        </p>
      );
    }

    MyComponent.propTypes = {
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }
		`
	));

test(`should allow React component definition without any props validation`, () =>
	tester.valid(
		`
		const MyComponent = ({name, value}) =>  {
      const [count, setCount] = useState(value);

      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <p>
          {name}
          <a href="javascript:void(0)" onClick={handleClick}>{count}</a>
        </p>
      );
    }
		`
	));

test(`should disallow partial props validation in a React component definition`, () =>
	tester.invalid(
		`
		const MyComponent = ({name, value}) =>  {
      const [count, setCount] = useState(value);

      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <p>
          {name}
          <a href="javascript:void(0)" onClick={handleClick}>{count}</a>
        </p>
      );
    }

    MyComponent.propTypes = {
      name: PropTypes.string.isRequired
    }
		`,
		[`'value' is missing in props validation`]
	));

test.run();
