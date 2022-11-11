# eslint-config-nextjs-ts

This package provides Infinum's ESLint NextJS TypeScript [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser @infinumjs/eslint-config-nextjs-ts
   ```

2. Extend your ESLint config:

   ```json
   {
		"extends": "@infinumjs/eslint-config-react-js", // optional
   	"overrides": [
   		{
   			"files": ["*.tsx?"],
   			"extends": "@infinumjs/eslint-config-nextjs-ts",
   			"parserOptions": {
   				"project": ["./tsconfig.json"]
   			}
   		}
   	],
   	"parser": "@typescript-eslint/parser"
   }
   ```

## License

The [MIT License](../LICENSE)

## Credits

@infinumjs/eslint-config-nextjs-ts is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
