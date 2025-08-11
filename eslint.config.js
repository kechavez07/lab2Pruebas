import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'], // Cambia a double si lo prefieres
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
];
