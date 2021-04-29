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
                'init-declarations': 'off',
                'no-undef-init': 'off',
                'no-undefined': 'warn',
                'no-use-before-define': 'off',
                'import/first': 'off',
                'import/no-mutable-exports': 'off',
                'import/order': 'off',
                'prettier/prettier': 'off',
                '@typescript-eslint/no-floating-promises': 'warn',
                '@typescript-eslint/no-unnecessary-condition': 'off',
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
