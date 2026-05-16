import catppuccin from '@catppuccin/starlight'

export const CATPPUCCIN_OPTIONS = {
  dark: { flavor: 'macchiato', accent: 'mauve' },
  light: { flavor: 'latte', accent: 'mauve' },
} as const satisfies NonNullable<Parameters<typeof catppuccin>[0]>
