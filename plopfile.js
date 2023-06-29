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
					const importStatement = `import ${name} from './${name}';\n`;

					const config = await prettier.resolveConfig();

					const newFile = prettier.format(
						[importStatement, file.replace(/(\n\};)/m, `\n\t${name},$1`)].join(''),
						config
					);

					return newFile;
				},
			},
		],
	});
};
