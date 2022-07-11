import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'jsx-a11y/anchor-is-valid',
});

test(`should disallow the use of anchors element as a button (1)`, () =>
	tester.validWithWarnings(
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
		[
			`Anchor used as a button. Anchors are primarily expected to navigate. Use the button element instead. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md`,
		]
	));

test(`should disallow the use of anchors element as a button (2)`, () =>
	tester.validWithWarnings(
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
		[
			`Anchor used as a button. Anchors are primarily expected to navigate. Use the button element instead. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md`,
		]
	));

test(`should disallow the use of anchors element as a button (3)`, () =>
	tester.invalid(
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
		[
			`Anchor used as a button. Anchors are primarily expected to navigate. Use the button element instead. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md`,
		]
	));

test(`should allow the use of anchor elements for navigation`, () =>
	tester.valid(
		`
    const MyNavComponent = () => {
      return (
        <a href="/some/valid/uri/">Navigate to page</a>
      );
    }
  `
	));

test(`should allow the use of anchor elements for navigation`, () =>
	tester.valid(
		`
    const MyNavComponent = () => {
      return (
        <a href="#top">Navigate to top</a>
      );
    }
  `
	));

test(`should disallow the use of invalid href attributes in anchor elements`, () =>
	tester.validWithWarnings(
		`
    const MyNavComponent = () => {
      return (
        <a href="#">Navigate to top</a>
      );
    }
  `,
		[
			`The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md`,
		]
	));

test.run();
