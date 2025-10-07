import { defineCollection } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { glob } from 'astro/loaders'
import { blogSchema } from 'starlight-blog/schema'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: context => blogSchema(context),
    }),
  }),
  snippets: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: context => blogSchema(context),
    }),
  }),
}
