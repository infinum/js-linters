If you added a new package make sure to check for these items:
- In the `README.md` file in the project root add a new connection in `graph TD` code block section.
This adds a connection to a graph created by [Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/).
- For your package also create a `README.md` file.
- Run `npm install` and `npx eslint --print-config .eslintrc`, and check if the config is correct,
especially if you are extending an existing package or adding an external config as a dependency (e.g. the
external config might override your rules).