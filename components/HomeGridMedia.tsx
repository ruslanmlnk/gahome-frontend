'use client'

import Image from 'next/image'
import { useRef, useState, type JSX, type MouseEvent } from 'react'

import {
  pickMediaVariant,
  type MediaSizeName,
  type MediaWithSizes,
} from '@/src/lib/pickMediaVariant'
import { shouldUnoptimizeImage } from '@/src/lib/shouldUnoptimizeImage'

type PosterAsset = {
  url: string
  alt?: string | null
} & MediaWithSizes

export type HomeGridMediaAsset = MediaWithSizes & {
  url: string
  alt?: string | null
  mimeType?: string | null
  videoPoster?: PosterAsset | null
}

type Props = {
  asset: HomeGridMediaAsset
  title: string
  className: string
  sizes: string
  preferredSizes: MediaSizeName[]
  priority?: boolean
}

export default function HomeGridMedia({
  asset,
  title,
  className,
  sizes,
  preferredSizes,
  priority = false,
}: Props): JSX.Element {
  const isVideo = asset.mimeType?.startsWith('video/')
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  if (isVideo) {
    const posterVariant =
      pickMediaVariant(asset.videoPoster, preferredSizes) ??
      pickMediaVariant(asset, preferredSizes)

    const startPlayback = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setIsPlaying(true)

      requestAnimationFrame(() => {
        void videoRef.current?.play().catch(() => {})
      })
    }

    return (
      <div className="absolute inset-0 overflow-hidden bg-transparent">
        {isPlaying ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterVariant?.url ?? undefined}
            className={className}
          >
            <source src={asset.url} type={asset.mimeType ?? undefined} />
          </video>
        ) : posterVariant ? (
          <Image
            src={posterVariant.url}
            alt={posterVariant.alt || title || 'GA Home Design'}
            priority={priority}
            unoptimized={shouldUnoptimizeImage(posterVariant.url)}
            fill
            sizes={sizes}
            className={className}
          />
        ) : (
          <div className="h-full w-full bg-transparent" />
        )}

        {!isPlaying ? (
          <button
            type="button"
            aria-label={`Play ${title || 'video'}`}
            onClick={startPlayback}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/8 transition hover:bg-black/16"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-[#131313] shadow-lg md:h-20 md:w-20">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6 fill-current md:h-8 md:w-8"
              >
                <path d="M8 5.5v13l10-6.5-10-6.5Z" />
              </svg>
            </span>
          </button>
        ) : null}
      </div>
    )
  }

  const variant = pickMediaVariant(asset, preferredSizes)

  if (!variant) {
    return <></>
  }

  return (
    <Image
      src={variant.url}
      alt={variant.alt || title || 'GA Home Design'}
      priority={priority}
      unoptimized={shouldUnoptimizeImage(variant.url)}
      fill
      sizes={sizes}
      className={className}
    />
  )
}
