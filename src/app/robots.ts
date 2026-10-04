import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/*', '/private', '/api/admin/*'],
      },
      {
        userAgent: [
          // OpenAI / ChatGPT Search
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          // Anthropic / Claude
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          // Perplexity AI
          'PerplexityBot',
          // Google AI & Search
          'Google-Extended',
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-News',
          // Microsoft Bing & Copilot
          'Bingbot',
          'msnbot',
          // Apple Intelligence
          'Applebot',
          'Applebot-Extended',
          // Others
          'Amazonbot',
          'cohere-ai',
          'DuckDuckBot',
          'Yandex',
          'Baiduspider',
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/sitemap.xml', '/rss.xml'],
        disallow: ['/admin', '/admin/*', '/private', '/api/admin/*'],
      },
    ],
    sitemap: 'https://pixarrow.com/sitemap.xml',
    host: 'https://pixarrow.com',
  };
}

