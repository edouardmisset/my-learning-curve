import { defineConfig } from 'vite-plus'

export default defineConfig({
  run: {
    cache: { scripts: true },
    tasks: {
      'astro:check': {
        command: 'astro check',
        input: [{ auto: true }, '!.astro/**'],
      },
    },
  },
  lint: {
    plugins: ['import', 'typescript'],
    categories: {
      correctness: 'error',
      suspicious: 'warn',
    },
    rules: {
      'no-console': 'warn',
    },
    ignorePatterns: [
      'dist/**',
      '.astro/**',
      'src/content/docs/snippets/**',
      'node_modules/**',
    ],
    overrides: [
      {
        files: ['scripts/**'],
        rules: {
          'no-console': 'off',
        },
      },
    ],
  },
  fmt: {
    printWidth: 80,
    useTabs: false,
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    trailingComma: 'all',
    overrides: [
      {
        files: ['*.jsonc', '**/*.jsonc'],
        options: {
          trailingComma: 'none',
        },
      },
    ],
  },
  staged: {
    '*.{js,jsx,ts,tsx,mjs,cjs,json,jsonc}': ['vp run lint', 'vp run format'],
    '*.css': ['stylelint --fix'],
    '*.{md,mdx}': [
      'vp run update:edit:date',
      'markdownlint-cli2 --fix',
      'vp run format',
    ],
  },
})
