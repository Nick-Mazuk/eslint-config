# eslint-config

A highly opinionated ESLint config.

## Getting started

Install from NPM, including peer dependencies, with `--save-dev`

```bash
npm i @nick-mazuk/eslint-config eslint --save-dev
```

Then, create a `.eslintrc` file in the root of your project with

```json
{
    "extends": [
        "@nick-mazuk/eslint-config"
    ]
}
```

### Running the linter

Add this to your `package.json` file:

```json
"scripts": {
    "lint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
},
```

Then run

```bash
npm run lint
```

### Versions

This package has configs for different scenarios.

- NextJS: use `@nick-mazuk/eslint-config/next`

When using a more specific config, the base config is not needed. For instance, with NextJS, this is all that's required:

```json
{
    "extends": [
        "@nick-mazuk/eslint-config/next"
    ]
}
```

## Integration with VS Code (recommended)

This is the easiest way to ensure ESLint is run every time you save a file, and that VS Code lints as you type, pointing out errors in real-time.

1. Create a new file `.vscode/settings.json`
2. Add this to the file:

## Use with Prettier

This config has Prettier built-in. If you use prettier with your code editor or use a `.prettierrc` file, there will likely be conflicts.

## Use without TypeScript

Currently, all the configs require TypeScript. Perhaps in the future I'll create a TypeScript addon, but since TypeScript is just better than vanilla JS, vanilla JS is currently not supported.

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.run": "onType",
}
```

> Note: when you first open the repo with this ESLint configuration, it can take up to a minute for VS Code to start linting. You'll still be able to edit files in the meantime.

## What rules are enabled?

In short, this config runs 500+ rules (and counting). Luckily, the source code is easy to read, so you should not have an issue reading the rules there.

## I found a bug, what do I do?

If you found a bug or rule conflicts, submit an issue on GitHub.
