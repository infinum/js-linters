import { getCoreTester } from './utils';

const ruleName = 'padding-line-between-statements';

const { test, validate } = getCoreTester(ruleName);

test('should warn for missing blank line before "return" statement', () =>
	validate(
		`function abc(x, y) {
        var result = x + y;
        return result;
    }
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "return" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        return result;
    }
    `,
		[]
	));

test('should not warn for a blank line before "return" statement if previous line is blank', () =>
	validate(
		`function abc(x, y) {
        var result = x + y;
        
        return result;
    }
    `,
		[]
	));

test('should warn for missing blank line before "if" statement', () =>
	validate(
		`var a = 2;
        if (a === 2) {}
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "if" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        if (a === 2) {}        
    }
    `,
		[]
	));

test('should not warn for a blank line before "if" statement if previous line is blank', () =>
	validate(
		`var a = 2;
        
        if (a === 2) {}
    `,
		[]
	));

test('should warn for missing blank line before "switch" statement', () =>
	validate(
		`var a = 2;
        switch (a) {
            case 2:
            default:
        }
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "switch" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        switch (x) {
            case 2:
            default:
        }        
    }
    `,
		[]
	));

test('should not warn for a blank line before "switch" statement if previous line is blank', () =>
	validate(
		`var a = 2;
        
        switch (a) {
            case 2:
            default:
        }
    `,
		[]
	));

test('should warn for missing blank line before "for" statement', () =>
	validate(
		`var a = 2;
        for (var i = 0; i < 2; i++) {}
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "for" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        for (var i = 0; i < 2; i++) {}       
    }
    `,
		[]
	));

test('should not warn for a blank line before "for" statement if previous line is blank', () =>
	validate(
		`var a = 2;
        
        for (var i = 0; i < 2; i++) {}
    `,
		[]
	));

test('should warn for missing blank line before "while" statement', () =>
	validate(
		`var i = 1;
        while (i < 2) { i++ }
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "while" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        while (x < 2) { x++ }       
    }
    `,
		[]
	));

test('should not warn for a blank line before "while" statement if previous line is blank', () =>
	validate(
		`var i = 1;
        
        while (i < 2) { i++ }
    `,
		[]
	));

test('should warn for missing blank line before "try" statement', () =>
	validate(
		`var i = 1;
        try {} catch (e) {}
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "try" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        try {} catch (e) {}       
    }
    `,
		[]
	));

test('should not warn for a blank line before "try" statement', () =>
	validate(
		`var i = 1;
        
        try {} catch (e) {}
    `,
		[]
	));

test('should warn for missing blank line before "throw" statement', () =>
	validate(
		`var i = 1;
        throw 'err';
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "throw" statement if previous line is function declaration', () =>
	validate(
		`function abc(x, y) {
        throw 'err';
    }
    `,
		[]
	));

test('should not warn for a blank line before "throw" statement', () =>
	validate(
		`var i = 1;
        
        throw 'err';
    `,
		[]
	));

test('should warn for missing blank line before "export" declaration', () =>
	validate(
		`var i = 1;
        export var b = 2;
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line before "throw" statement', () =>
	validate(
		`var i = 1;
        
        export var b = 2;
    `,
		[]
	));

test('should warn for missing blank line after "const" declaration', () =>
	validate(
		`const a = 2;
        console.log(a);
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line after "const" declaration if next line is end of function definition', () =>
	validate(
		`function abc(x, y) {
        const a = 2;
    }
    `,
		[]
	));

test('should not warn for a blank line after "const" declaration', () =>
	validate(
		`const a = 2;
        
        console.log(a);
    `,
		[]
	));

test('should not warn for a blank line for "const" declaration sequences', () =>
	validate(
		`const a = 2;
        const b = 2;
        const c = 2;
    `,
		[]
	));

test('should warn for missing blank line after "let" declaration', () =>
	validate(
		`let a = 2;
        console.log(a);
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line after "let" declaration if next line is end of function definition', () =>
	validate(
		`function abc(x, y) {
        let a = 2;
    }
    `,
		[]
	));

test('should not warn for a blank line after "let" declaration', () =>
	validate(
		`let a = 2;
        
        console.log(a);
    `,
		[]
	));

test('should not warn for a blank line for "let" declaration sequences', () =>
	validate(
		`let a = 2;
        let b = 2;
        let c = 2;
    `,
		[]
	));

test('should warn for missing blank line after "var" statement', () =>
	validate(
		`var a = 2;
        console.log(a);
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line after "var" statement if next line is end of function definition', () =>
	validate(
		`function abc(x, y) {
        var a = 2;
    }
    `,
		[]
	));

test('should not warn for a blank line after "var" statement', () =>
	validate(
		`var a = 2;
        
        console.log(a);
    `,
		[]
	));

test('should not warn for a blank line for "var" statement sequences', () =>
	validate(
		`var a = 2;
        var b = 2;
        var c = 2;
    `,
		[]
	));

test('should warn for missing blank line after "import" declaration', () =>
	validate(
		`import a from 'a';
        console.log(a);
    `,
		[`Expected blank line before this statement.`]
	));

test('should not warn for a blank line after "import" declaration', () =>
	validate(
		`import a from 'a';
        
        console.log(a);
    `,
		[]
	));

test('should not warn for a blank line for "import" declaration sequences', () =>
	validate(
		`import a from 'a';
        import b from 'b';
        import c from 'c';
    `,
		[]
	));

test('should not warn for a blank line for "const", "let" and "var" sequences', () =>
	validate(
		`const a = 2;
        let b = 2;
        var c = 2;
    `,
		[]
	));

test.run();
