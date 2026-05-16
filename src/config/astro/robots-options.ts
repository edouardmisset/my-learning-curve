import { type RobotsOptions } from 'astro-robots'
import { BASE_WEBSITE_URL, WEBSITE_URL } from '../../constants/links.ts'

type RobotsPolicyEntry = RobotsOptions['policy'][number]
type BaseUserAgent = Extract<RobotsPolicyEntry['userAgent'], string>
type AdditionalUserAgent =
  | 'ChatGPT-User'
  | 'OAI-SearchBot'
  | 'ClaudeBot'
  | 'PerplexityBot'
  | 'GPTBot'
  | 'CCBot'
  | 'Bytespider'
  | 'Amazonbot'
  | 'anthropic-ai'
type ExtendedPolicyEntry = Omit<RobotsPolicyEntry, 'userAgent'> & {
  userAgent:
    | BaseUserAgent
    | AdditionalUserAgent
    | readonly (BaseUserAgent | AdditionalUserAgent)[]
}

const toRobotsPolicy = (
  policy: readonly ExtendedPolicyEntry[],
): RobotsOptions['policy'] => policy as unknown as RobotsOptions['policy']

const ROBOTS_POLICY = [
  {
    userAgent: '*',
    allow: '/',
  },
  {
    userAgent: [
      'Googlebot',
      'bingbot',
      'Applebot',
      'ChatGPT-User',
      'OAI-SearchBot',
      'ClaudeBot',
      'PerplexityBot',
    ],
    allow: '/',
  },
  {
    userAgent: [
      'GPTBot',
      'AdsBot-Google',
      'AdsBot-Google-Mobile',
      'AdsBot-Google-Mobile-Apps',
      'Mediapartners-Google',
      'Storebot-Google',
      'Google-InspectionTool',
      'CCBot',
      'Bytespider',
      'Amazonbot',
      'anthropic-ai',
    ],
    disallow: '/',
  },
] as const satisfies readonly ExtendedPolicyEntry[]

export const ROBOTS_OPTIONS = {
  host: new URL(BASE_WEBSITE_URL).host,
  sitemap: [`${WEBSITE_URL}/sitemap-index.xml`],
  policy: toRobotsPolicy(ROBOTS_POLICY),
} as const satisfies RobotsOptions
