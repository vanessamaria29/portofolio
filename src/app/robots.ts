import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      // OpenAI ChatGPT Crawlers (ChatGPT-User, GPTBot, OAI-SearchBot)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Google Gemini & Search Crawlers (Google-Extended, Googlebot)
      {
        userAgent: ['Googlebot', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://vanessamaria.dev/sitemap.xml',
  }
}
