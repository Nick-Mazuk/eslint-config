module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    plugins: ['svelte3'],
    extends: [require.resolve('./lib/base')],
    rules: {},
    ignorePatterns: ['public/build/'],
    settings: {
        'svelte3/typescript': require('typescript'),
    },
    parserOptions: {
        extraFileExtensions: ['.svelte'],
    },
    overrides: [
        {
            files: ['*.svelte'],
            rules: {
                'import/first': 'off',
                'prettier/prettier': 'off',
                'import/no-mutable-exports': 'off',
                'no-use-before-define': 'off',
            },
            processor: 'svelte3/svelte3',
        },
        {
            files: ['$layout.svelte'],
            rules: {
                'unicorn/filename-case': 'off',
            },
        },
    ],
}
