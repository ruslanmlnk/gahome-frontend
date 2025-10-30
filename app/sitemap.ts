import type { MetadataRoute } from 'next'
import { graphqlClient } from '@/src/lib/graphqlClient'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL
  const baseUrl = base ? base.replace(/\/$/, '') : ''

  const items: MetadataRoute.Sitemap = [
    {
      url: baseUrl ? `${baseUrl}/` : '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  try {
    const query = /* GraphQL */ `
      query GetAllPageSlugs($limit: Int) {
        Pages(limit: $limit) {
          docs { slug updatedAt }
        }
      }
    `

    const data: any = await graphqlClient.request(query, { limit: 1000 })
    const docs: Array<{ slug?: string; updatedAt?: string | null }> = data?.Pages?.docs || []

    for (const d of docs) {
      if (!d?.slug) continue
      const path = d.slug.startsWith('/') ? d.slug : `/${d.slug}`
      items.push({
        url: baseUrl ? `${baseUrl}${path}` : path,
        lastModified: d.updatedAt ? new Date(d.updatedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  } catch {
    // If GraphQL fails, return at least the homepage entry
  }

  return items
}
