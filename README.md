# Amalihomes

Home of quality furniture for every home & office.

## Run tasks

To run the dev server for your app, use:

```sh
npm run amalihomes
```

To create a production bundle:

```sh
npx nx build amalihomes
```

To see all available targets to run for a project, run:

```sh
npx nx show project amalihomes
```

## Generate Services, Directives and Components

The following command can be used to generate files based on the project's file structure.

```sh
npm run gen <directive|service|component|page|lib> <name>
```

## Add new projects

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

- [How to make a page SEO-ready](./apps/amalihomes/src/app/presentation/pages/README.md)

**Learn more:**

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
