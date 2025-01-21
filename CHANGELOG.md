# @infinum/eslint-plugin

## 2.1.2

### Patch Changes

- [#140](https://github.com/infinum/js-linters/pull/140) [`69c60de`](https://github.com/infinum/js-linters/commit/69c60de8628060190df68183e361d723c7e435a0) Thanks [@danipavic](https://github.com/danipavic)! - Updated `@typescript-eslint/naming-convention` prefixes for `boolean` variables to allow `are` and `can`

## 2.1.1

### Patch Changes

- [#137](https://github.com/infinum/js-linters/pull/137) [`2e7b2ad`](https://github.com/infinum/js-linters/commit/2e7b2ad016dcf762e40b81e0091c44e56486723b) Thanks [@danipavic](https://github.com/danipavic)! - Updated `@typescript-eslint/naming-convention` format for `typeAlike` selector to `PascalCase`

## 2.1.0

### Minor Changes

- [#135](https://github.com/infinum/js-linters/pull/135) [`c9cff87`](https://github.com/infinum/js-linters/commit/c9cff8706b62d728797776de11434539416a60ac) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Allow wider scope of versions in peerDependencies

## 2.0.0

### Major Changes

- [#129](https://github.com/infinum/js-linters/pull/129) [`c3d6b80`](https://github.com/infinum/js-linters/commit/c3d6b80ab5c1f81eff289c8a37076261a7b26ac8) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Added `eslint-plugin-typescript-enum` dependency and rules to React config

- [#126](https://github.com/infinum/js-linters/pull/126) [`8e02656`](https://github.com/infinum/js-linters/commit/8e02656ed03a657eb8ecc84e7719c389cb9fa35a) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Bumped dependencies and fixed tests:

  - Bumped peer dependencies:
    - "@next/eslint-plugin-next": "~14.2.0",
    - "@typescript-eslint/eslint-plugin": "~7.8.0",
    - "@typescript-eslint/parser": "~7.8.0",
    - "eslint": "^8.57.0",
    - "eslint-plugin-jsx-a11y": "~6.8.0",
    - "eslint-plugin-react": "~7.34.0",
    - "eslint-plugin-react-hooks": "~4.6.0",
    - "eslint-plugin-rxjs": "~5.0.3",
    - "typescript": ">=3.3.1"
  - Bumped dev dependencies
  - Fixed tests for the new parser version
  - Updated `tsconfig.json` for `NodeNext`
  - Updated `no-underscore-dangle` to allow after `this.*`
  - Updated `@typescript-eslint/no-unused-vars` to allow in `...rest` siblings
  - Improved `tsconfig` files for local development

- [#125](https://github.com/infinum/js-linters/pull/125) [`dfc1448`](https://github.com/infinum/js-linters/commit/dfc1448bbcac304e14baf1b3384096abda77c4d5) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Set `pNPM` as package manager:

  - Added `pnpm` lockfile and workspace configuration
  - Added static code analysis scripts to `package.json`
  - Configured `packageManager` for `corepack`
  - Updated `CONTRIBUTING.md` documentation
  - Updated `GithubActions` for `pnpm` support and resolved Node version warnings
  - Updated `husky` configuration for `pnpm`
  - Fixed `ESLint` configuration so it could be run for this repository also
  - Fixed `npm` doppelgangers
  - Added `changesets` config to `Prettier` ignore

- [#128](https://github.com/infinum/js-linters/pull/128) [`6e5a3f0`](https://github.com/infinum/js-linters/commit/6e5a3f0be1ef88777af2c2913971dcc4e5fd8366) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Changed `@typescript-eslint/naming-convention` rule to be StrictPascalCase for:
  - enums (with members)
  - booleans (with is, should, has prefixes)
  - typeLikes (class, enum, interface, typeAlias, typeParameter)

### Minor Changes

- [#123](https://github.com/infinum/js-linters/pull/123) [`c7c5a71`](https://github.com/infinum/js-linters/commit/c7c5a71b3b06dff299de857e6ac8425d801905ad) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Changed `Release` workflow trigger to be manual

- [#127](https://github.com/infinum/js-linters/pull/127) [`2d99377`](https://github.com/infinum/js-linters/commit/2d9937743bc1c55dabca20da26c67b227683b988) Thanks [@kamdubiel](https://github.com/kamdubiel)! - Disabled error for `emotion css prop` in React config

## 1.0.0

### Major Changes

- f1312dd: Convert `js-linters` to `eslint-plugin`.

### Minor Changes

- 7553023: Create `no-hooks-in-pages-folder` rule and add it to `next-js` configuration
- 9870ac8: Add `plop` generators for rules and configs
