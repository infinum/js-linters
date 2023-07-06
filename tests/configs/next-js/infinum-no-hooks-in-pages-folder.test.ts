import { getNextJsTester } from './utils';

const ruleName = '@infinum/no-hooks-in-pages-folder';

const { test, validate } = getNextJsTester(ruleName);

test('should have `@infinum/no-hooks-in-pages-folder` rule enabled', () => {
	const pageFilePath = 'pages/index.tsx';

	validate(
		`const HomePage = () => {
				const [count] = useState(bar);
				
				return (<div>{count}</div>);
			}`,
		[`React hook 'useState' not allowed in ${process.cwd()}/${pageFilePath}`],
		[],
		{ filePath: pageFilePath }
	);
});

test.run();
