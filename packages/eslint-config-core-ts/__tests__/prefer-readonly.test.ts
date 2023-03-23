import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/prefer-readonly';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should disallow the use of non-readonly private members if they are never modified outside of the constructor', () =>
	validate(
		`
		class Container {
			// These member variables could be marked as readonly
			private neverModifiedMember = true;
			private onlyModifiedInConstructor: number;

			public constructor(
				onlyModifiedInConstructor: number,
				// Private parameter properties can also be marked as readonly
				private neverModifiedParameter: string,
			) {
				this.onlyModifiedInConstructor = onlyModifiedInConstructor;
			}
		}
	`,
		[
			`Member 'neverModifiedMember' is never reassigned; mark it as \`readonly\`.`,
			`Member 'onlyModifiedInConstructor' is never reassigned; mark it as \`readonly\`.`,
			`Member 'neverModifiedParameter: string' is never reassigned; mark it as \`readonly\`.`,
		]
	));

test.run();
