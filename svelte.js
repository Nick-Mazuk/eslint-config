module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    plugins: ['svelte3', 'prettier-plugin-svelte'],
    extends: [require.resolve('./lib/base')],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                // also defined in base config -- change values there if updated
                singleQuote: true,
                printWidth: 100,
                tabWidth: 4,
                useTabs: false,
                semi: false,
                quoteProps: 'as-needed',
                jsxSingleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true,
                jsxBracketSameLine: false,
                arrowParens: 'always',
                proseWrap: 'never',
                htmlWhitespaceSensitivity: 'css',
                endOfLine: 'lf',
                embeddedLanguageFormatting: 'auto',

                // svelte specific config
                plugins: ['prettier-plugin-svelte'],
                svelteStrictMode: true,
                svelteAllowShorthand: true,
                svelteBracketNewLine: true,
                svelteIndentScriptAndStyle: true,
            },
        ],
    },
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    ignorePatterns: [
        'public/build/'
    ],
    settings: {
        'svelte3/typescript': require('typescript'),
    }
}
