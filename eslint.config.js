export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            'no-extra-semi': 'error',
            quotes: ['error', 'single'],

        }

    }
];