module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    plugins: ['react', 'react-hooks', 'testing-library', 'jsx-a11y'],
    extends: [require.resolve('./lib/base'), 'plugin:react/recommended', 'plugin:testing-library/recommended', 'plugin:testing-library/react', 'plugin:jsx-a11y/strict'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-danger': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
        'react/no-did-update-set-state': ['error', 'disallow-in-func'],
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-redundant-should-component-update': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'warn',
        'react/state-in-constructor': ['error', 'never'],
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': 'error',
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'jsx-a11y/label-has-for': 'off',
    },
    "overrides": [
        {
            "files": ["*.test.tsx"],
            "rules": {
                'no-undefined': 'off',
            }
        }
    ]
   
}
