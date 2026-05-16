import { defineEcConfig } from '@astrojs/starlight/expressive-code'
import { pluginFullscreen } from 'expressive-code-fullscreen'

export default defineEcConfig({
  plugins: [pluginFullscreen()],
})
