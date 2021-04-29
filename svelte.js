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
                'no-undef-init': 'off',
                'init-declarations': 'off',
                'import/first': 'off',
                'prettier/prettier': 'off',
                'import/no-mutable-exports': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'off',
                'import/order': 'off',
            },
            processor: 'svelte3/svelte3',
        },
        {
            files: ['$layout.svelte', '$error.svelte'],
            rules: {
                'unicorn/filename-case': 'off',
            },
        },
    ],
}
