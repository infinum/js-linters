---
"@infinum/eslint-plugin": major
---

Bumped dependencies and fixed tests:
- Bumped peer dependencies:
	-	"@next/eslint-plugin-next": "~14.2.0",
	-	"@typescript-eslint/eslint-plugin": "~7.8.0",
	-	"@typescript-eslint/parser": "~7.8.0",
	-	"eslint": "^8.57.0",
	-	"eslint-plugin-jsx-a11y": "~6.8.0",
	-	"eslint-plugin-react": "~7.34.0",
	-	"eslint-plugin-react-hooks": "~4.6.0",
	-	"eslint-plugin-rxjs": "~5.0.3",
	-	"typescript": ">=3.3.1"
- Bumped dev dependencies
- Fixed tests for the new parser version
- Updated `tsconfig.json` for `NodeNext`
- Updated `no-underscore-dangle` to allow after `this.*`
- Updated `@typescript-eslint/no-unused-vars` to allow in `...rest` siblings
- Improved `tsconfig` files for local development
