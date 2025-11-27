import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 2021, sourceType: 'module' }
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off'
    }
  }
];