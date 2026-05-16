import starlightBlog from 'starlight-blog'
import { GITHUB_PROFILE_URL } from '../../../constants/links.ts'

export const STARLIGHT_BLOG_OPTIONS = {
  authors: {
    Edouard: {
      name: 'Edouard Misset',
      title: 'Enthusiastic Full Stack JS Web Developer',
      url: GITHUB_PROFILE_URL,
      picture: 'https://avatars.githubusercontent.com/u/63284636?s=200',
    },
  },
  metrics: {
    readingTime: true,
    words: 'rounded',
  },
  navigation: 'none',
} satisfies NonNullable<Parameters<typeof starlightBlog>[0]>
