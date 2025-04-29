import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import react from 'eslint-plugin-react'
import json from 'eslint-plugin-jsonc'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**', '**/build/**']),
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ts.configs.recommended,
  react.configs.flat.recommended,
  stylistic.configs.recommended,
  json.configs['flat/recommended-with-jsonc'],
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': ['off'],
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
    },
  },
])
