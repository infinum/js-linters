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

We recommend setting some additional `tsconfig` compiler options which might not be set by default, especially since `no-unused-variable` `tslint` rule was deprecated:

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true,
  }
}
```
