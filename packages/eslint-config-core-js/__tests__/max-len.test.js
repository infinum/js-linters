import { suite } from 'uvu';
import { getTester } from '@infinumjs/test-utils';

import eslintConfig from '../index';

const rule = 'max-len';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow with warning lines with more than 120 characters', () =>
	validate(
		// eslint-disable-next-line max-len
		`const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum felis fermentum tempus lacinia. Suspendisse hendrerit laoreet sem, a pulvinar velit porta in. Duis facilisis. ";`,
		[],
		['This line has a length of 199. Maximum allowed is 120.']
	));

test('should allow imports with more than 120 characters', () =>
	validate(
		// eslint-disable-next-line max-len
		`import {dsadf, dklsadklsa} from "Lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit_Duis_fermentum_felis_fermentum_tempus_lacinia";
`
	));

test.run();
