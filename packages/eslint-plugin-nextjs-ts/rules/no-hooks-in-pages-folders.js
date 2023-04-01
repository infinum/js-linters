'use strict';

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow React hooks in `pages` folder',
			recommended: true,
		},
		schema: [],
	},
	create: function (context) {
		const forbiddenFolders = ['/src/pages/', '/pages/'];
		const forbiddenFolderRegex = new RegExp(`(${forbiddenFolders.join('|')})`);

		function isReactHook(node) {
			const isCallExpression = node.type === 'CallExpression';
			const isReactHook = isCallExpression && node.callee.type === 'Identifier' && node.callee.name.startsWith('use');

			return isReactHook;
		}

		function checkForHooks(node) {
			const filename = context.getFilename();

			if (filename.match(forbiddenFolderRegex)) {
				if (isReactHook(node)) {
					context.report({
						node,
						message: `React hook '${node.callee.name}' not allowed in ${filename.replace(context.getCwd(), '')}`,
					});
				}
			}
		}

		return {
			CallExpression: checkForHooks,
		};
	},
};
