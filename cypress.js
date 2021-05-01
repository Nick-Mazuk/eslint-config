module.exports = {
    plugins: ['cypress', 'chai-friendly'],
    extends: [
        require.resolve('./lib/base'),
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
    ],
    rules: {
        'cypress/assertion-before-screenshot': 'error',
        'cypress/no-force': 'error',
        'import/unambiguous': 'off',
        'promise/catch-or-return': 'off',
        'promise/always-return': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
    },
}
