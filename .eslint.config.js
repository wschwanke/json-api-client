// @ts-check

import js from '@eslint/js';
import ts from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import jsdoc from 'eslint-plugin-jsdoc';
import * as eslintrc from '@eslint/eslintrc';

export default [
  js.configs.recommended,
  ts.configs.eslintRecommended,
  ...ts.configs.recommended,
  jsdoc['configs'],
  {
    languageOptions: {
      globals: eslintrc.Legacy.environments.get('es2024'),
    },
    plugins: {
      unicorn,
      jsdoc,
    },
    rules: {
    },
  },
];
