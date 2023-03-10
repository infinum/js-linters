// Save this file without autoformat to maintain spaces and tabs !!!!!!
import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';
const rule = 'no-mixed-spaces-and-tabs';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should disallow mixed spaces and tabs for indentation', () =>
	validate(
		`function add(x, y) {
			// --->..->return x + y;
			  	return x + y;
		}
		`,
		[`Mixed spaces and tabs.`]
	));

test('should allow mixed spaces and tabs for indentation when used for alignement (smart-tabs)', () =>
	validate(
		`function main() {
		// --->var x = 5,
		// --->....y = 7;
		var x = 5,
			  y = 7;
	}
		`
	));

test.run();
