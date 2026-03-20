export function shouldUnoptimizeImage(url?: string | null): boolean {
  if (!url) return false

  try {
    const parsed = new URL(url)

    return (
      parsed.pathname.includes('/api/media/file/') ||
      parsed.pathname.startsWith('/media/')
    )
  } catch {
    return url.includes('/api/media/file/') || url.startsWith('/media/')
  }
}
