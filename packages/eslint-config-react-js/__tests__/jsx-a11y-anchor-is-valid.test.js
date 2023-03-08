import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'jsx-a11y/anchor-is-valid';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

const anchorAsAButtonError = `Anchor used as a button. Anchors are primarily expected to navigate. Use the button element instead. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md`;

test(`should allow with warning the use of anchors element as a button (1)`, () =>
	validate(
		`
    const MyComponent = ({bar}) => {
      const [count, setCount] = useState(0);

      return (
        <a onClick={() => setCount(count + 1)}>
        {count}
        </a>
      );
    }
  `,
		[],
		[anchorAsAButtonError]
	));

test(`should allow with warning the use of anchors element as a button (2)`, () =>
	validate(
		`
    const MyComponent = ({bar}) => {
      const [count, setCount] = useState(0);

      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <a href="#" onClick={handleClick}>{count}</a>
      );
    }
  `,
		[],
		[anchorAsAButtonError]
	));

test(`should allow with warning the use of anchors element as a button (3)`, () =>
	validate(
		`
    const MyComponent = ({bar}) => {
      const [count, setCount] = useState(0);

      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <a href="javascript:void(0)" onClick={handleClick}>{count}</a>
      );
    }
  `,
		[],
		[anchorAsAButtonError]
	));

test(`should allow the use of anchor elements for navigation`, () =>
	validate(
		`
    const MyNavComponent = () => {
      return (
        <a href="/some/valid/uri/">Navigate to page</a>
      );
    }
  `
	));

test(`should allow the use of anchor elements for navigation`, () =>
	validate(
		`
    const MyNavComponent = () => {
      return (
        <a href="#top">Navigate to top</a>
      );
    }
  `
	));

test(`should allow with warning the use of invalid href attributes in anchor elements`, () =>
	validate(
		`
    const MyNavComponent = () => {
      return (
        <a href="#">Navigate to top</a>
      );
    }
  `,
		[],
		[
			`The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md`,
		]
	));

test.run();
