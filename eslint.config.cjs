// eslint.config.cjs

const globals = require('globals');
const pluginJs = require('@eslint/js');

module.exports = [
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
