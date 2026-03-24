import { defineConfig } from 'oxlint'

export default defineConfig({
  $schema: './node_modules/oxlint/configuration_schema.json',
  plugins: ['import', 'typescript'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
    'no-console': 'warn',
  },
  ignorePatterns: ['dist/**', '.astro/**', 'src/content/docs/snippets/**'],
  overrides: [
    {
      files: ['scripts/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
})
