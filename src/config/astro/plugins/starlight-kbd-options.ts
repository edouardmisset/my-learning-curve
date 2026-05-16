import starlightKbd from 'starlight-kbd'

export const STARLIGHT_KBD_OPTIONS = {
  types: [
    { id: 'mac', label: 'macOS', default: true },
    { id: 'windows', label: 'Windows' },
    { id: 'linux', label: 'Linux' },
  ],
} as const satisfies NonNullable<Parameters<typeof starlightKbd>[0]>
