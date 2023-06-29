import { TSESTree } from '@typescript-eslint/utils';
import { createRule } from '../utils/createRule';

export default createRule({
	name: 'no-hooks-in-pages-folders',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow React hooks in `pages` folder',
			recommended: 'error',
		},
		schema: [],
		messages: {
			noHooksInPagesFolder: "React hook '{{hookName}}' not allowed in {{filename}}",
		},
	},
	defaultOptions: [],
	create: function (context) {
		const forbiddenFolders = ['/src/pages/', '/pages/'];
		const forbiddenFolderRegex = new RegExp(`(${forbiddenFolders.join('|')})`);

		function isReactHook(node: TSESTree.CallExpression) {
			if (node.type !== TSESTree.AST_NODE_TYPES.CallExpression) {
				return false;
			}

			if (node.callee.type !== TSESTree.AST_NODE_TYPES.Identifier) {
				return false;
			}

			return node.callee.name.startsWith('use');
		}

		function checkForHooks(node: TSESTree.CallExpression) {
			const filename = context.getFilename();

			if (!filename.match(forbiddenFolderRegex)) {
				return;
			}

			if (isReactHook(node)) {
				context.report({
					node,
					messageId: 'noHooksInPagesFolder',
					data: {
						// `as` is safe since `isReactHook` will be true
						hookName: (node.callee as TSESTree.Identifier).name,
						filename,
					},
				});
			}
		}

		return {
			CallExpression: checkForHooks,
		};
	},
});
