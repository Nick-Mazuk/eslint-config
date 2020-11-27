module.exports = {
    extends: [require.resolve('./react')],
    overrides: [
        {
            files: ['pages/**'],
            rules: {
                'import/no-default-export': 'off',
                'max-lines-per-function': 'off',
            },
        },
        {
            files: ['pages/api/**'],
            rules: {
                'max-lines-per-function': 'error',
            },
        },
    ],
    ignorePatterns: ['next-env.d.ts']
}
