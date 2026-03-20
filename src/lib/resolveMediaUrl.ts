const fallbackGraphQLEndpoint = 'https://admin.homegudzdesign.com/api/graphql'

const cmsOrigin = (() => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || fallbackGraphQLEndpoint

  try {
    return new URL(endpoint).origin
  } catch {
    return 'https://admin.homegudzdesign.com'
  }
})()

export function resolveMediaUrl(url?: string | null): string {
  if (!url) return ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('//')) return `https:${url}`

  try {
    return new URL(url, cmsOrigin).toString()
  } catch {
    return url
  }
}
