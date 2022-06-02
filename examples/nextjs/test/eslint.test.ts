import { ESLint } from 'eslint';

it('ESLint settings regression test', async () => {
	const eslint = new ESLint({ fix: false });
	const results = await eslint.lintFiles(['**/*.ts', '**/*.tsx']);

	await ESLint.outputFixes(results);

	const formatter = await eslint.loadFormatter('visualstudio');
	const resultText = formatter.format(results);

	(expect(resultText) as any).toMatchSnapshot();
});
