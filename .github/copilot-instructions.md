# GitHub Copilot Instructions

You are an expert developer working on "My Learning Curve", a personal knowledge base built with **Astro** and **Starlight**.

## Project Architecture

- **Framework**: Astro 5 + Starlight (Documentation theme).
- **Content**: Located in `src/content/docs/`. Heavily relies on **MDX**.
- **Collections**: Configured in `src/content.config.ts`. Extends Starlight schema with `starlight-blog` schema.
- **Routing**: File-based routing handled by Starlight.
- **Styling**: `@catppuccin/starlight` theme + `src/styles/custom.css`.

## Tech Stack & Tools

- **Language**: TypeScript (`strict` mode).
- **Package Manager**: PNPM.
- **Linter/Formatter**: **Biome** (replaces ESLint/Prettier).
- **Other Linters**: `stylelint`, `markdownlint`, `cspell`.

## Development Workflows

### 1. Code Quality & Formatting

- **Lint & Format**: Always use **Biome**.
  - Run: `pnpm lint` or `pnpm format`.
  - Config: `biome.json` (Note: `semicolons: "asNeeded"`, `quoteStyle: "single"`).
- **Full Check**: Run `pnpm check` to execute all validators (Biome, Markdownlint, Typecheck, Stylelint).
- Do not suggest ESLint or Prettier configurations.

### 2. Creating Content

- Create `.mdx` files in `src/content/docs/`.
- **Frontmatter**: Must adhere to Starlight + Plugin schemas.
  - **Required Fields**:
    - `title`: Article heading.
    - `date`: Publication date (YYYY-MM-DD).
    - `excerpt`: Short summary for previews (max ~20 words).
    - `tags`: Array of lowercased topic strings.
  - **Optional Fields**:
    - `lastUpdated`: Date of last significant change (YYYY-MM-DD).
  - See `src/content.config.ts` for full schema definitions.

### 3. Blog Writing Standards

- **Golden Rule**: Follow the writing styles and structure defined in `src/content/docs/learn/guides/project-collaboration/11-writing-guidelines.mdx`.
- **Templates**: Always start new blog posts by copying `src/content/docs/reference/templates/article-template.mdx`.
- **Structure**:
  - Use `## TL;DR` for a quick summary.
  - Use `## Introduction` to hook the reader.
  - Use `## Conclusion` to wrap up.
- **Images**: Store in `src/assets/` or relative to the content file if localized.

### 4. Component Development

- Use `.astro` components in `src/components/`.
- Prefer extensive type safety for props (interface `Props`).
- Use the `~` alias for imports mapping to `src/` (e.g., `import { ... } from '~/components/...'`).

### 5. Scripts

- `scripts/update-frontmatter.ts`: Utility to update edit dates.
- execution: `node --experimental-strip-types scripts/update-frontmatter.ts`.

## Coding Conventions

- **TypeScript**: Use strict types. Avoid `any`.
- **Imports**: Group imports logically. Use `type` imports for types.
- **CSS**: Use standard CSS in `src/styles`. Follow `stylelint` rules.
- **Dates**: Format dates consistently in frontmatter (YYYY-MM-DD).

## Key Files

- `astro.config.mjs`: Starlight & integration config.
- `src/content.config.ts`: Content collections definition.
- `biome.json`: Linter/formatter rules.
- `src/constants/links.ts`: Centralized link constants.
