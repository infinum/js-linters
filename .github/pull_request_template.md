If you are adding a new package:

- Add a new connection to the `graph TD` code block section in the `README.md` file of the root project, to update the diagram created with [Mermaid](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/)
- Create a README.md file for the new package
- Run `npm install`
- Run `npx eslint --print-config .eslintrc` and check if the config is correct, especially if you are extending an existing package or adding an external config as a dependency (e.g. the external config might override your rules)
