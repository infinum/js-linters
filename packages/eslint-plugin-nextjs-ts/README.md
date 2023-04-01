# eslint-plugin-nextjs-ts

This package provides Infinum's ESLint NextJS TypeScript [plugin](https://eslint.org/docs/latest/extend/plugins).

## Usage

This is part of out [eslint-config-nextjs-ts](https://www.npmjs.com/package/@infinumjs/eslint-config-next-ts) package. We recommend using that instead of manually setting up this package.

### Manual setup

1. Install the required packages:

   ```sh
   npm install --save-dev eslint @infinumjs/eslint-plugin-nextjs-ts
   ```

2. Extend your ESLint config:

   ```json
   {
   	"extends": "plugin:@infinumjs/nextjs-ts",
   	"parser": "@typescript-eslint/parser",
   	"overrides": [
   		{
   			"files": ["*.ts", "*.tsx"],
   			"parserOptions": {
   				"project": ["./tsconfig.json"]
   			}
   		}
   	]
   }
   ```

## Rules

- `@infinumjs/nextjs-ts/no-hooks-in-pages-folders` - Reports hooks being used in `pages` folders.

## License

The [MIT License](../LICENSE)

## Credits

@infinumjs/eslint-config-nextjs-ts is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
