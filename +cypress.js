module.exports = {
    plugins: ['cypress', 'chai-friendly'],
    overrides: [
        {
            files: ['*.test.ts', 'cypress/**/*.ts'],
            rules: {
                'no-unused-expressions': 'off',
                'chai-friendly/no-unused-expressions': 'error',
                'cypress/no-assigning-return-values': 'error',
                'cypress/no-unnecessary-waiting': 'error',
                'cypress/no-async-tests': 'error',
                'cypress/assertion-before-screenshot': 'error',
                'cypress/no-force': 'error',
                'import/unambiguous': 'off',
                'promise/catch-or-return': 'off',
                'promise/always-return': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
            },
        },
        {
            files: ['*.test.ts'],
            rules: {
                'max-lines-per-function': 'warn',
            },
        },
    ],
}
