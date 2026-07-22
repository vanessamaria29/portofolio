import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/product-management/konekin',
    '/product-management/onium',
    '/product-management/digital-skill-assessment',
    '/product-management/glacier',
  ]

  return routes.map((route) => ({
    url: `https://vanessamaria.dev${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
