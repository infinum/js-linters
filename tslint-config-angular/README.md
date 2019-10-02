## Install

```bash
npm install --save-dev @infinumjs/tslint-config-angular
```

## Configure

`tslint.json`:
```json
{
  "extends": "@infinumjs/tslint-config-angular",
  "rules": {
    "directive-selector": [true, "attribute", "my-app", "camelCase"],
    "component-selector": [true, "element", "my-app", "kebab-case"]
  }
}
```

## tsconfig recommendations

We recommend setting some additional `tsconfig` options which might not be set by default.

Since `no-unused-variable` `tslint` rule was deprecated, we recommend setting `noUnusedLocals` and `noUnusedParameters`.

Set `fullTemplateTypeCheck` to `true` to enable 3rd phase of AOT compilation - template type checking.

Set `preserveWhitespaces` to `false` to remove potentially superfluous whitespace characters from the compiled template.

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "preserveWhitespaces": false
  }
}
```
