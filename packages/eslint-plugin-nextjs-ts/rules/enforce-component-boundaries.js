'use strict';

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Ensure that folder boundaries are respected within the app',
			recommended: true,
		},
		schema: [],
	},
	create: function (context) {
		function createPathResolver(context) {
			const resolve = require('resolve');

			let _mathPath;
			const getOrLoadPathMatcher = (context) => {
				const parserServices = context.parserServices;
				const program = parserServices.program;

				if (!program) {
					return () => null;
				}

				if (!_mathPath) {
					const { loadConfig, createMatchPath } = require('tsconfig-paths');

					const baseUrl = program.getCompilerOptions().pathsBasePath;
					const tsConfigPaths = loadConfig(baseUrl);

					if (tsConfigPaths.resultType !== 'success') {
						throw new Error('Could not load tsconfig paths');
					}

					_mathPath = createMatchPath(tsConfigPaths.absoluteBaseUrl, tsConfigPaths.paths);
				}

				return _mathPath;
			};

			const pathMatcher = getOrLoadPathMatcher(context);

			const fileDir = context.getFilename();

			return function resolvePath(importPath) {
				const matchedPath = pathMatcher(importPath, undefined, undefined, ['.ts', '.tsx', '.js', '.jsx']);

				if (matchedPath) {
					return matchedPath;
				}

				return resolve.sync(importPath, {
					basedir: fileDir,
				});
			};
		}

		const pathResolver = createPathResolver(context);
		const path = require('path');

		const { folderBoundaries } = context.options[0] || { folderBoundaries: ['components/features'] };
		const foldersRegex = folderBoundaries.join('|');

		const fileDir = context.getFilename();

		if (!fileDir.match(new RegExp(`(${foldersRegex})`))) {
			return {};
		}

		return {
			ImportDeclaration(node) {
				try {
					const importPath = node.source.value;
					const resolvedPath = pathResolver(importPath);

					if (!resolvedPath) {
						return;
					}

					const absolutePath = path.resolve(resolvedPath);

					if (absolutePath.match(new RegExp(`(${foldersRegex})`))) {
						context.report({
							node,
							message: `You should respect folder boundaries. You are trying to import ${absolutePath.replace(
								new RegExp(context.getCwd(), 'i'),
								''
							)} from ${fileDir.replace(new RegExp(context.getCwd(), 'i'), '')}`,
						});
					}
				} catch (e) {}
			},
		};
	},
};
