import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

async function getBaseUrl() {
  const h = await headers()
  const forwardedHost = h.get('x-forwarded-host')
  const host = forwardedHost || h.get('host') || 'localhost:3000'
  const protoHeader = h.get('x-forwarded-proto')
  const proto = protoHeader || (host.startsWith('localhost') ? 'http' : 'https')
  return `${proto}://${host}`.replace(/\/$/, '')
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await getBaseUrl()
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
