# @infinum/eslint-plugin

This package provides Infinum's ESLint [plugin](https://eslint.org/docs/latest/extend/plugins).

## Installation

```bash
npm install --save-dev @infinum/eslint-plugin
```

## Usage

The basic usage of this plugin is to extend the `plugin:@infinum/core` config in your ESLint configuration file.

```json
{
	"extends": ["plugin:@infinum/core"]
}
```

However, we can also extend `.eslintrc` with additional configs. The idea is to have modular configs and that you can choose what rules you want to have on the project. E.g., there is no need to have `TypeScript` rules on a `JavaScript` project. The entire list of configs can be found in [`src/configs/index.ts`](src/configs/index.ts).

> NOTE: some configs require additional plugins to be installed. E.g., `@infinum/react` requires `eslint-plugin-react` and `eslint-plugin-react-hooks` to be installed.

### Presets

<details>

<summary>Angular Project</summary>

```bash
npm install --save-dev eslint-plugin-rxjs eslint-plugin-jasmine @infinum/eslint-plugin
```

```json
{
	"extends": ["plugin:@infinum/core", "plugin:@infinum/typescript", "plugin:@infinum/angular"],
	"parserOptions": {
		"project": ["./tsconfig.json"]
	}
}
```

</details>

<details>

<summary>Infinum React Stack Project</summary>

```bash
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @infinum/eslint-plugin
```

```json
{
	"extends": [
		"plugin:@infinum/core",
		"plugin:@infinum/typescript",
		"plugin:@infinum/react",
		"plugin:@infinum/next-js",
		"plugin:@infinum/chakra-ui"
	],
	"parserOptions": {
		"project": ["./tsconfig.json"]
	}
}
```

</details>

## License

The [MIT License](./LICENSE)

## Credits

`js-linters` is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
