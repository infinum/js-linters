const prettier = require('prettier');

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
	plop.setGenerator('config', {
		description: 'Generates a new eslint config',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter the name of the config',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/configs/{{kebabCase name}}.ts',
				templateFile: 'plop/config/config.hbs',
			},
			{
				type: 'add',
				path: 'tests/configs/{{kebabCase name}}/utils.ts',
				templateFile: 'plop/config/test-utils.hbs',
			},
			{
				type: 'modify',
				path: 'src/configs/index.ts',
				transform: async (file, { name }) => {
					const camelCaseName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
					const kebabCaseName = name.replace(/([A-Z])/g, '-$1').toLowerCase();

					const config = await prettier.resolveConfig();

					const newFile = prettier.format(
						[
							`import ${camelCaseName} from './${kebabCaseName}';\n`, // import
							file.replace(/(\n\};)/m, `\n${kebabCaseName},$1`), // extend exported object
						].join(''),
						config
					);

					return newFile;
				},
			},
		],
	});

	plop.setGenerator('rule', {
		description: 'Generates a new eslint rule',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter the name of the rule',
			},
			{
				type: 'input',
				name: 'description',
				message: 'Enter the description of the rule',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/rules/{{kebabCase name}}.ts',
				templateFile: 'plop/rule/rule.hbs',
			},
			{
				type: 'add',
				path: 'docs/rules/{{kebabCase name}}.md',
				templateFile: 'plop/rule/docs.hbs',
			},
			{
				type: 'add',
				path: 'tests/rules/{{kebabCase name}}.md',
				templateFile: 'plop/rule/test.hbs',
			},
			{
				type: 'modify',
				path: 'src/rules/index.ts',
				transform: async (file, { name }) => {
					const camelCaseName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
					const kebabCaseName = name.replace(/([A-Z])/g, '-$1').toLowerCase();

					const config = await prettier.resolveConfig();

					const newFile = prettier.format(
						[
							`import ${camelCaseName} from './${kebabCaseName}';\n`, // import
							file.replace(/\{(.*)\}/m, `{$1\n${kebabCaseName}: ${camelCaseName}}`), // extend exported object
						].join(''),
						config
					);

					return newFile;
				},
			},
		],
	});
};
