# eslint-config-core-ts

This package provides Infinum's ESLint core TypeScript [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @infinumjs/eslint-config-core-ts
   ```

2. Extend your ESLint config:

   ```json
   {
   	"extends": "@infinumjs/eslint-config-core-ts",
   	"overrides": [
   		{
   			"files": ["*.ts"],
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

@infinumjs/eslint-config-core-ts is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
