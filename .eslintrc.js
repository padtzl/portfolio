module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    plugins: ['prettier', 'import', '@typescript-eslint'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
        eqeqeq: ['error', 'smart'],
        'vue/max-attributes-per-line': 'off', // turned off because of conflict with prettier rules
        'vue/html-self-closing': 'off', // turned off because of conflict with prettier rules,
        'vue/singleline-html-element-content-newline': 'off', // turned off because of conflict with prettier rules,
        'vue/multi-word-component-names': 'off',
        'vue/script-setup-uses-vars': 'error',
        'vue/html-indent': ['error', 4],
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    },
};
