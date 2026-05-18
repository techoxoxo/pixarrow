import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'OAI-SearchBot', 'anthropic-ai'],
        allow: ['/', '/llms.txt'],
        disallow: ['/admin/', '/private/'],
      }
    ],
    sitemap: 'https://pixarrow.com/sitemap.xml',
  }
}
