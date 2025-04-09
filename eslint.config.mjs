import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    // Override or add rules here
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-empty-function': 'error',
      eqeqeq: 'error',
      'no-shadow': 'error',
      'no-fallthrough': 'error',
      'no-case-declarations': 'error',
      'no-debugger': 'error',
    },
  },
];
