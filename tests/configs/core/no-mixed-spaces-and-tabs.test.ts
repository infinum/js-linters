import { getCoreTester } from './utils';

const ruleName = 'no-mixed-spaces-and-tabs';

const { test, validate } = getCoreTester(ruleName);

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
