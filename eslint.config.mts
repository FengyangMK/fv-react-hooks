import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } }
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'no-console': 'warn',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'prettier/prettier': [
                'error',
                {
                    semi: false,
                    singleQuote: true,
                    trailingComma: 'none',
                    tabWidth: 4
                }
            ]
        },
        plugins: {
            prettier: prettier,
            'simple-import-sort': simpleImportSort
        }
    }
])
