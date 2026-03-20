import { resolveMediaUrl } from '@/src/lib/resolveMediaUrl'

export type MediaSizeName = 'thumbnail' | 'card' | 'tablet' | 'desktop'

export type MediaSizeVariant = {
  url?: string | null
  width?: number | null
  height?: number | null
  mimeType?: string | null
  filesize?: number | null
  filename?: string | null
}

export type MediaWithSizes = {
  url?: string | null
  alt?: string | null
  mimeType?: string | null
  width?: number | null
  height?: number | null
  sizes?: Partial<Record<MediaSizeName, MediaSizeVariant | null>> | null
}

export type PickedMediaVariant = {
  url: string
  alt: string
  mimeType?: string | null
  width?: number | null
  height?: number | null
}

export function pickMediaVariant(
  media?: MediaWithSizes | null,
  preferredSizes: MediaSizeName[] = [],
): PickedMediaVariant | null {
  if (!media) return null

  for (const sizeName of preferredSizes) {
    const size = media.sizes?.[sizeName]
    const url = resolveMediaUrl(size?.url)

    if (url) {
      return {
        url,
        alt: media.alt ?? '',
        mimeType: size?.mimeType ?? media.mimeType ?? null,
        width: size?.width ?? media.width ?? null,
        height: size?.height ?? media.height ?? null,
      }
    }
  }

  const fallbackUrl = resolveMediaUrl(media.url)

  if (!fallbackUrl) return null

  return {
    url: fallbackUrl,
    alt: media.alt ?? '',
    mimeType: media.mimeType ?? null,
    width: media.width ?? null,
    height: media.height ?? null,
  }
}
