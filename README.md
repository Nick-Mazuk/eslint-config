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
    "extends": ["@nick-mazuk/eslint-config"]
}
```

### Running the linter

Add this to your `package.json` file:

```json
"scripts": {
    "eslint": "eslint '**/*.{js,ts,tsx}' --quiet --fix",
    "check-types": "tsc --noemit",
    "lint": "npm run eslint && npm run check-types"
},
```

Then run

```bash
npm run lint
```

### Versions

This package has configs for different scenarios (more coming).

- **React**: use `@nick-mazuk/eslint-config/react`
- **NextJS**: use `@nick-mazuk/eslint-config/next`
- **Cypress**: use `@nick-mazuk/eslint-config/cypress`
- **Firebase functions**: use `@nick-mazuk/eslint-config/firebase-functions`

When using a more specific config, the base config is not needed. For instance, with NextJS, this is all that's required:

```json
{
    "extends": ["@nick-mazuk/eslint-config/next"]
}
```

## Integration with VS Code (recommended)

This is the easiest way to ensure ESLint is run every time you save a file, and that VS Code lints as you type, pointing out errors in real-time.

1. Create a new file `.vscode/settings.json`
2. Add this to the file:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.run": "onType"
}
```

> **Note**: when you first open the repo with this ESLint configuration, it can take up to a minute for VS Code to start linting. You'll still be able to edit files in the meantime.

## Use with Prettier

This config has Prettier built-in. If you use Prettier with your code editor or use a `.prettierrc` file, there will likely be conflicts. It's best to remove any `.prettierrc` files you may have and disable Prettier in your code editor.

> **Rationale**: this ESLint config is highly opinionated and is a living config. As best practices evolve, this config will evolve. Since Prettier is 100% fixable, that means that your code will always follow this config and therefore always follow best practices. If you override the formatting with Prettier, you forgo any future updates in regard to Prettier formatting.

**Note**: If using the Svelte config, you need to setup Prettier manually. This is because the plugin `prettier-plugin-svelte` (which is needed to parse Svelte) [does not work with ESLint](https://github.com/sveltejs/prettier-plugin-svelte/issues/57).

## Use without TypeScript

Currently, all the configs require TypeScript. Perhaps in the future I'll create a TypeScript addon, but since TypeScript is just better than vanilla JS, vanilla JS is currently not supported.

## What rules are enabled?

In short, this config runs 500+ rules (and counting). Luckily, the source code is easy to read, so you should not have an issue reading the rules there.

## I found a bug, what do I do?

If you found a bug or rule conflicts, [submit an issue on GitHub](https://github.com/Nick-Mazuk/eslint-config/issues).
