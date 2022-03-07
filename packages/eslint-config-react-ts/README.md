# eslint-config-react-ts

This package provides Infinum's ESLint React TypeScript [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser @infinumjs/eslint-config-react-ts
   ```

2. Extend your ESLint config:

   ```json
   {
   	"extends": "@infinumjs/eslint-config-core-ts",
   	"overrides": [
   		{
   			"files": ["*.ts", "*.tsx"],
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

@infinumjs/eslint-config-react-ts is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
