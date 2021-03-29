module.exports = {
    extends: [require.resolve('./lib/base')],
    rules: {
        'no-console': 'off',
        'unicorn/no-process-exit': 'off',
    },
}
