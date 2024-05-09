> Thanks for showing interest to contribute to Infinum's `js-linters`!

## Setup the Project

To start your development, you need to setup the project locally.

1. Clone the repo

```sh
git clone git@github.com:infinum/js-linters.git
cd js-linters
```

2. Setup all the dependencies and packages

```sh
pnpm install
```

## Development

To ease the developer activity, we have created a few scripts that will help you. Also, before you start with contributing, make sure to get familiar with the project tooling.

### Tooling

- [pNPM](https://pnpm.io/installation) to manage dependencies
- [TypeScript](https://www.typescriptlang.org/) to bundle package
- [uvu](https://github.com/lukeed/uvu) for testing configs and custom rules
- [CommitLint](https://commitlint.js.org/#/) for enforcing [the conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
- [Changesets](https://github.com/atlassian/changesets) for changes documentation, changelog generation, and release management.
- [Plop](https://plopjs.com/) for generating new rules and configs

### Commands

**`pnpm install`**: install all dependencies.

**`pnpm build`**: builds the package.

**`pnpm clean`**: removes the build output.

**`pnpm test`**: runs all tests.

**`pnpm test:watch`**: runs all tests in watch mode.

**`pnpm gen:config`**: runs plop script that generates a new config (name is provided as terminal prompt).

**`pnpm gen:rule`**: runs plop script that generates a new rule (name and description are provided as terminal prompt).

### Commit Convention

When you create a commit we kindly ask you to follow the conventional commits convention. Supported types are:

- `feat:`: all changes that introduce completely new code or new features
- `fix:`: changes that fix a bug
- `refactor:`: any code related change that is not a fix nor a feature
- `docs:`: changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)
- `build:`: all changes regarding the build of the software, changes to dependencies or the addition of new dependencies
- `test:`: all changes regarding tests (adding new tests or changing existing ones)
- `ci:`: all changes regarding the configuration of continuous integration (i.e. github actions, ci system)
- `chore:`: all changes to the repository that do not fit into any of the above categories

If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/.

### Tests

All commits that fix bugs or add features need a test.

## License

By contributing your code to the @infinum/eslint-plugin GitHub repository, you agree to license your contribution under the MIT license.
