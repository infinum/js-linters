module.exports = {
	valid: [
		`
    interface ITestInterface {}
    `,
	],
	invalid: [
		{
			code: 'interface TestInterface {}',
			errors: ['Missing semicolon.'],
		},
	],
};
