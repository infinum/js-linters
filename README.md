# Infinum JS Linters

ESLint and TSLint extensible shareable configs based on Infinum JavaScript Team's [coding styles and guidelines](https://infinum.com/handbook/books/frontend).

## ESLint package dependencies

```mermaid
graph TD;
    eslint-config-core-ts-->eslint-config-core-js;
    eslint-config-react-js-->eslint-config-core-js;
    eslint-config-react-ts-->eslint-config-react-js;
    eslint-config-react-ts-->eslint-config-core-ts;
    eslint-config-angular-ts-->eslint-config-core-ts;
```

## License

The [MIT License](LICENSE)

## Credits

js-linters is maintained and sponsored by
[Infinum](https://www.infinum.com).

<img src="https://infinum.com/infinum.png" width="264">
