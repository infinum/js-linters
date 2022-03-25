# eslint-config-angular-ts

This package provides Infinum's ESLint Angular [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Quick start

1. Use the Angular CLI to add add `@angular-eslint/schematics`. If you are migrating from TSLint, follow the [migration guide](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint).

   ```sh
   ng add @angular-eslint/schematics
   ```

2. Install the RxJS plugin and Infinum's config.

   ```sh
   npm install --save-dev eslint-plugin-rxjs @infinumjs/eslint-config-angular-ts
   ```

3. Open your project's ESLint config file and add Infinum's config to the `extends` array for TypeScript files.

   ```json
   {
   	"overrides": [
   		{
   			"files": ["*.ts"],
   			"extends": [
   				"plugin:@angular-eslint/recommended",
   				"plugin:@angular-eslint/template/process-inline-templates",
   				"@infinumjs/eslint-config-angular-ts"
   			]
   		}
   	]
   }
   ```

## License

The [MIT License](../LICENSE)

## Credits

@infinumjs/eslint-config-angular-ts is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
