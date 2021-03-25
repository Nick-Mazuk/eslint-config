module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    plugins: ['svelte3'],
    extends: [require.resolve('./lib/base')],
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
            files: ['**/*.svelte', '*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    ignorePatterns: [
        'public/build/'
    ],
    settings: {
        'svelte3/typescript': require('typescript'),
    },
    parserOptions: {
        extraFileExtensions: ['.svelte']
    }
}
