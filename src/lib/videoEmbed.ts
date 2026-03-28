const VIDEO_FILE_PATTERN = /\.(mp4|webm|mov|ogg)(\?.*)?$/i

export type EmbedVideoProvider = 'youtube' | 'vimeo'

type EmbedVideoOptions = {
  autoplay?: boolean
  controls?: boolean
  enableJsApi?: boolean
  muted?: boolean
  quality?: 'default' | 'small' | 'medium' | 'large' | 'hd720' | 'hd1080' | 'highres'
}

function withSearchParams(
  input: string,
  params: Record<string, string | number | undefined>,
): string {
  const url = new URL(input)

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === '') return
    url.searchParams.set(key, String(value))
  })

  return url.toString()
}

function getYouTubeVideoId(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl)
    const host = url.hostname.replace(/^www\./i, '')

    if (host === 'youtu.be') {
      return url.pathname.split('/').filter(Boolean)[0] ?? null
    }

    if (
      host === 'youtube.com' ||
      host.endsWith('.youtube.com') ||
      host === 'youtube-nocookie.com'
    ) {
      if (url.pathname === '/watch') {
        return url.searchParams.get('v')
      }

      if (url.pathname.startsWith('/embed/') || url.pathname.startsWith('/shorts/')) {
        return url.pathname.split('/').filter(Boolean)[1] ?? null
      }
    }
  } catch {
    const match = rawUrl.match(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/i,
    )

    return match?.[1] ?? null
  }

  return null
}

function getVimeoVideoId(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl)
    const host = url.hostname.replace(/^www\./i, '')

    if (host !== 'vimeo.com' && host !== 'player.vimeo.com') return null

    const parts = url.pathname.split('/').filter(Boolean)
    const lastPart = parts.at(-1)

    return lastPart && /^\d+$/.test(lastPart) ? lastPart : null
  } catch {
    const match = rawUrl.match(/vimeo\.com\/(\d+)/i)
    return match?.[1] ?? null
  }
}

export function isVideoFileUrl(rawUrl?: string | null): boolean {
  return VIDEO_FILE_PATTERN.test(String(rawUrl ?? '').trim())
}

export function getEmbedVideoProvider(rawUrl?: string | null): EmbedVideoProvider | null {
  const normalizedUrl = String(rawUrl ?? '').trim()

  if (!normalizedUrl) return null

  if (getYouTubeVideoId(normalizedUrl)) {
    return 'youtube'
  }

  if (getVimeoVideoId(normalizedUrl)) {
    return 'vimeo'
  }

  return null
}

export function getEmbedVideoUrl(
  rawUrl?: string | null,
  options: EmbedVideoOptions | boolean = false,
): string | null {
  const normalizedUrl = String(rawUrl ?? '').trim()

  if (!normalizedUrl) return null

  const {
    autoplay = false,
    controls = true,
    enableJsApi = false,
    muted = false,
    quality = 'hd1080',
  } = typeof options === 'boolean' ? { autoplay: options } : options

  const youTubeId = getYouTubeVideoId(normalizedUrl)

  if (youTubeId) {
    return withSearchParams(`https://www.youtube.com/embed/${youTubeId}`, {
      autoplay: autoplay ? 1 : 0,
      controls: controls ? 1 : 0,
      enablejsapi: enableJsApi ? 1 : 0,
      fs: 1,
      iv_load_policy: 3,
      mute: muted ? 1 : 0,
      playsinline: 1,
      rel: 0,
      vq: quality === 'default' ? undefined : quality,
    })
  }

  const vimeoId = getVimeoVideoId(normalizedUrl)

  if (vimeoId) {
    return withSearchParams(`https://player.vimeo.com/video/${vimeoId}`, {
      autoplay: autoplay ? 1 : 0,
      controls: controls ? 1 : 0,
      muted: muted ? 1 : 0,
      rel: 0,
      title: 0,
      byline: 0,
      portrait: 0,
    })
  }

  return null
}
