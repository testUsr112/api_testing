export default [
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
        },

        rules: {
            'no-empty': 'error',
            'no-multiple-empty-lines': 'warn',
            'no-var': 'error',
            'prefer-const': 'error',
        },
        ignores: ['reports/**'],
    },
]
