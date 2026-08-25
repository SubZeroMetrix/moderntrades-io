import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moderntrades.io'
  const now = new Date().toISOString()

  const staticRoutes = [
    '', '/resources', '/resources/crm-readiness', '/resources/revenue-recovery',
    '/resources/automation-readiness', '/resources/phone-and-sms-readiness',
    '/resources/customer-reactivation', '/resources/estimate-follow-up', '/resources/reporting-and-attribution',
    '/resources/ai-assistant-readiness', '/resources/software-buying-guide',
    '/newsletter', '/about', '/contact', '/privacy', '/terms',
  ]

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route.startsWith('/resources') ? 0.8 : 0.5,
  }))
}
