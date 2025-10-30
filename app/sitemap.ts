import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { graphqlClient } from '@/src/lib/graphqlClient'

export const dynamic = 'force-dynamic'

async function getBaseUrl() {
  const h = await headers()
  const forwardedHost = h.get('x-forwarded-host')
  const host = forwardedHost || h.get('host') || 'localhost:3000'
  const protoHeader = h.get('x-forwarded-proto')
  const proto = protoHeader || (host.startsWith('localhost') ? 'http' : 'https')
  return `${proto}://${host}`.replace(/\/$/, '')
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getBaseUrl()

  const items: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
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
        url: `${baseUrl}${path}`,
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
