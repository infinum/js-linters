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

### Angular Preset

Install the following packages:

```bash
npm install --save-dev eslint-plugin-rxjs eslint-plugin-jasmine @infinum/eslint-plugin
```

Add this to you `eslint` config:

```json
{
	"extends": ["plugin:@infinum/core", "plugin:@infinum/typescript", "plugin:@infinum/angular"],
	"parserOptions": {
		"project": ["./tsconfig.json"]
	}
}
```

### Infinum React Stack Preset

Install the following packages:

```bash
npm install -D -E \
@infinum/eslint-plugin@2 \
eslint-plugin-react@7.34 \
eslint-plugin-react-hooks@4.6 \
eslint-plugin-jsx-a11y@6.8 \
@typescript-eslint/eslint-plugin@7.8 \
@typescript-eslint/parser@7.8 \
@next/eslint-plugin-next@14.2 \
eslint-plugin-typescript-enum@2.1 \
eslint-plugin-chakra-ui@0.11
```

Add this to you `eslint` config:

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

## License

The [MIT License](./LICENSE)

## Credits

`js-linters` is maintained and sponsored by
[Infinum](https://www.infinum.com).

<svg viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Infinum" role="presentation" width="264px"><path class="logo__sign" d="M48.5999 1.13333H43.2V16.8H48.5999V1.13333Z" fill="#111111"></path><path d="M77.0665 1.13333V16.8667H71.1998L57.9998 6.8V16.8667H52.5999V1.13333H59.0665L71.6665 10.7333V1.13333H77.0665Z" fill="#111111"></path><path d="M102.133 5.4H86.8668V8.26666H101.533V12.3333H86.8668V16.8667H81.5334V1.13333H102.133V5.4Z" fill="#111111"></path><path d="M110.867 1.13333H105.467V16.8H110.867V1.13333Z" fill="#111111"></path><path d="M139.734 1.13333V16.8667H133.934L120.667 6.8V16.8667H115.333V1.13333H121.734L134.334 10.7333V1.13333H139.734Z" fill="#111111"></path><path d="M149.333 9.26666C149.333 10.4 149.6 11.3333 150.266 11.9333C150.933 12.6 152.133 12.8667 153.8 12.8667H156.666C159.733 12.8667 161.266 11.6667 161.266 9.26666V1.13333H166.666V9.26666C166.666 11.5333 165.933 13.4667 164.533 14.8667C163.066 16.3333 160.933 17.0667 157.933 17.0667H152.6C151.066 17.0667 149.733 16.8667 148.6 16.4667C147.466 16.0667 146.4 15.3333 145.4 14.2667C144.4 13.2 143.933 11.5333 143.933 9.26666V1.13333H149.333V9.26666Z" fill="#111111"></path><path d="M176.133 16.8667H170.8V1.13333H178.533L185.2 11.4667L191.733 1.13333H199.6V16.8667H194.266V6.26666L187.533 16.8667H183.066L176.133 6.26666V16.8667Z" fill="#111111"></path><path d="M2.54419 8.98692C2.54419 5.38655 5.27661 2.54416 8.87844 2.54416C12.3561 2.54416 14.7159 5.44972 18.0072 8.98692C21.2985 12.5241 23.6583 15.4297 27.136 15.4297C30.6757 15.4297 33.4702 12.5873 33.4702 8.98692C33.4702 5.38655 30.6136 2.54416 27.0739 2.54416C23.5962 2.54416 21.2364 5.44972 17.9451 8.98692C14.6538 12.5241 12.294 15.4297 8.81634 15.4297C5.27661 15.3665 2.54419 12.5241 2.54419 8.98692Z" stroke="#D8262C" stroke-width="5.05314" stroke-miterlimit="10"></path></svg>
