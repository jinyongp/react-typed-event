import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**', '**/build/**']),
  {
    name: 'global',
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  {
    name: 'markdown',
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    name: 'js/recommended',
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  ts.configs.recommended,
  {
    name: 'stylistic',
    ignores: ['**/*.json'],
    ...stylistic.configs.recommended,
  },
  {
    name: 'jsx/tsx',
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': ['off'],
    },
  },
  {
    name: 'typescript',
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
      }],
    },
  },
])
