import { getReactTester } from './utils';

const ruleName = 'react/no-unknown-property';

const { test, validate } = getReactTester(ruleName);

test(`should allow "css" prop in React JSX`, () =>
	validate(
		`
		const MyComponent = () =>  {

      return (
        <div css={{
					color: 'red',
				}}>
          Foo
        </div>
      );
    }
		`
	));

test.run();
