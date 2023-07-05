import rule from '../../src/rules/no-hooks-in-pages-folder';
import { ESLintUtils } from '@typescript-eslint/utils';
import { test } from 'uvu';

const ruleTester = new ESLintUtils.RuleTester({
	parser: '@typescript-eslint/parser',
});

test('no-hooks-in-pages-folder', () => {
	ruleTester.run('no-hooks-in-pages-folder', rule, {
		valid: [
			{
				name: 'should allow calling hooks in non pages folder',
				code: `
				const MyComponent1 = ({bar}) => {
					const [count] = useState(bar);
					
					return (<div>{count}</div>);
				}

				function MyComponent2({bar}) {
					const [count] = useState(bar);
					
					return (<div>{count}</div>);
				}`,
				filename: 'src/components/shared/MyComponent/MyComponent.tsx',
			},
		],
		invalid: [
			{
				name: 'should not allow calling hooks in page component in pages folder',
				code: `
				const HomePage = () => {
					const [count] = useState(bar);
					
					return (<div>{count}</div>);
				}
				
				export default HomePage;`,
				filename: 'pages/home.tsx',
				errors: [{ messageId: 'noHooksInPagesFolder' }],
			},
			{
				name: 'should not allow calling hooks in page component in src/pages folder',
				code: `
				const HomePage = () => {
					const [count] = useState(bar);
					
					return (<div>{count}</div>);
				}
				
				export default HomePage;`,
				filename: 'src/pages/home.tsx',
				errors: [{ messageId: 'noHooksInPagesFolder' }],
			},
		],
	});
});

test.run();
