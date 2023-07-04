import { getReactTester } from './utils';

const ruleName = 'react/prop-types';

const { test, validate } = getReactTester(ruleName);

test(`should allow React component definition with full props validation`, () =>
	validate(
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
	validate(
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
	validate(
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
