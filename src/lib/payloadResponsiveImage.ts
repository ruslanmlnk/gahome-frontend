import type { ImageLoaderProps } from 'next/image'

import type { MediaSizeName, MediaWithSizes } from '@/src/lib/pickMediaVariant'
import { resolveMediaUrl } from '@/src/lib/resolveMediaUrl'

const PAYLOAD_RESPONSIVE_PREFIX = '__payload_responsive__:'

type PayloadResponsiveCandidate = {
  url: string
  width?: number | null
  height?: number | null
}

type PayloadResponsiveImageConfig = {
  fallback: PayloadResponsiveCandidate
  candidates: PayloadResponsiveCandidate[]
}

const defaultSizeOrder: MediaSizeName[] = ['thumbnail', 'card', 'tablet', 'desktop']

function normalizeCandidate(candidate?: {
  url?: string | null
  width?: number | null
  height?: number | null
} | null): PayloadResponsiveCandidate | null {
  const url = resolveMediaUrl(candidate?.url)

  if (!url) return null

  return {
    url,
    width: candidate?.width ?? null,
    height: candidate?.height ?? null,
  }
}

function dedupeCandidates(candidates: PayloadResponsiveCandidate[]): PayloadResponsiveCandidate[] {
  const seen = new Set<string>()

  return candidates.filter((candidate) => {
    if (seen.has(candidate.url)) return false

    seen.add(candidate.url)
    return true
  })
}

function parsePayloadResponsiveSrc(src: string): PayloadResponsiveImageConfig | null {
  if (!src.startsWith(PAYLOAD_RESPONSIVE_PREFIX)) return null

  try {
    const encoded = src.slice(PAYLOAD_RESPONSIVE_PREFIX.length)
    return JSON.parse(decodeURIComponent(encoded)) as PayloadResponsiveImageConfig
  } catch {
    return null
  }
}

export function buildPayloadResponsiveSrc(
  media?: MediaWithSizes | null,
  preferredSizes: MediaSizeName[] = defaultSizeOrder,
): string | null {
  const fallback = normalizeCandidate(media)

  if (!fallback) return null

  const candidates = dedupeCandidates(
    preferredSizes
      .map((sizeName) => normalizeCandidate(media?.sizes?.[sizeName]))
      .filter((candidate): candidate is PayloadResponsiveCandidate => Boolean(candidate)),
  )

  return `${PAYLOAD_RESPONSIVE_PREFIX}${encodeURIComponent(
    JSON.stringify({
      fallback,
      candidates: dedupeCandidates([...candidates, fallback]),
    } satisfies PayloadResponsiveImageConfig),
  )}`
}

export function payloadResponsiveImageLoader({ src, width }: ImageLoaderProps): string {
  const config = parsePayloadResponsiveSrc(src)

  if (!config) return src

  const sorted = [...config.candidates].sort(
    (left, right) => (left.width ?? Number.MAX_SAFE_INTEGER) - (right.width ?? Number.MAX_SAFE_INTEGER),
  )

  const chosen =
    sorted.find((candidate) => (candidate.width ?? Number.MAX_SAFE_INTEGER) >= width) ??
    sorted.at(-1) ??
    config.fallback

  return chosen.url
}
