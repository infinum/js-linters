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
