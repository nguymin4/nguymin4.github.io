import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: [
      '.cache/**',
      'public/**',
      'dist/**',
      'build/**',
    ],
  },
  js.configs.recommended,
  stylistic.configs.recommended,

  // 1. Base block for all source files (Browser)
  {
    files: ['**/*.{js,jsx,mjs}'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'import': importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    settings: { react: { version: '18.3' } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
      'jsx-a11y/label-has-associated-control': 'error',
      'react/jsx-filename-extension': ['off'],
      'react-hooks/rules-of-hooks': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.spec.{js,jsx}',
            'server/test/**/*.js',
            '*.setup.js',
            'gatsby-*.js',
            '**/gatsby-*.js',
            'eslint.config.{js,mjs,cjs}',
            '**/*.config.{js,mjs,cjs}',
          ],
        },
      ],
    },
  },

  // 2. Gatsby/Node override block (MERGES into the block above for matched files)
  {
    files: ['gatsby-*.js', '*.config.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
