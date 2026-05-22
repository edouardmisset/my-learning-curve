import { type StarlightKbdUserConfig } from 'starlight-kbd'

export const STARLIGHT_KBD_OPTIONS = {
  types: [
    { id: 'mac', label: 'macOS', default: true },
    { id: 'windows', label: 'Windows' },
    { id: 'linux', label: 'Linux' },
  ],
  globalPicker: false,
} as const satisfies StarlightKbdUserConfig
