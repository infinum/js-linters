// Save this file without autoformat to maintain spaces and tabs
import { test } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const tester = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule: 'no-mixed-spaces-and-tabs',
});

test('should disallow mixed spaces and tabs for indentation 1', () =>
	tester.invalid(
		`function add(x, y) {
			// --->..return x + y;
				  return x + y;
		}
		`,
		[`Mixed spaces and tabs.`]
	));

test('should disallow mixed spaces and tabs for indentation 2', () =>
	tester.invalid(
		`function main() {
			// --->var x = 5,
			// --->....y = 7;
			
					var x = 5,
					   y = 7;
			}
		`,
		[`Mixed spaces and tabs.`]
	));

test('should allow mixed spaces and tabs for indentation when used for alignement (smart-tabs)', () =>
	tester.valid(
		`function main() {
		// --->var x = 5,
		// --->....y = 7;

    var x = 5,
        y = 7;
}
		`
	));

test.run();
