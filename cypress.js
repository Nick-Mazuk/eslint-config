module.exports = {
    plugins: [
        "cypress",
        "chai-friendly"
    ],
    extends: [
        require.resolve('./lib/base'),
        "plugin:cypress/recommended",
        "plugin:chai-friendly/recommended",
    ],
    rules: {
        "cypress/assertion-before-screenshot": "error",
        "cypress/no-force": "error",
        "jest/expect-expect": "off",
        "import/unambiguous": "off",
    }
}
