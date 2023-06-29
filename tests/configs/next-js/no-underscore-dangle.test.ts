import { getNextJsTester } from './utils';

const ruleName = 'no-underscore-dangle';

const { test, validate } = getNextJsTester(ruleName);

test('should allow using underscores in __NEXT_DATA__', () =>
	validate(`
const ssrData = window.__NEXT_DATA__;
const props = this.props.__NEXT_DATA__.locale;
`));

test('should not allow wrong usage of __NEXT_DATA__ variations', () =>
	validate(
		`
	const ssrData1 = window.__NEXT__DATA__;
  const ssrData2 = window.___NEXT_DATA__;
  const ssrData3 = window.__NEXT_DATA___;
  const ssrData4 = window.__NEXT_DATA;
  const ssrData5 = window._NEXT_DATA_;
	`,
		[
			`Unexpected dangling '_' in '__NEXT__DATA__'.`,
			`Unexpected dangling '_' in '___NEXT_DATA__'.`,
			`Unexpected dangling '_' in '__NEXT_DATA___'.`,
			`Unexpected dangling '_' in '__NEXT_DATA'.`,
			`Unexpected dangling '_' in '_NEXT_DATA_'.`,
		]
	));

test.run();
