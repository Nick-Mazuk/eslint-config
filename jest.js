module.exports = {
    plugins: ['jest'],
    extends: [require.resolve('./lib/base'), 'plugin:jest/recommended', 'plugin:jest/style'],
}
