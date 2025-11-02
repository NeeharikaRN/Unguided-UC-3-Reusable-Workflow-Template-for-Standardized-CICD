import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      eqeqeq: 'error',
    },
  },
];
