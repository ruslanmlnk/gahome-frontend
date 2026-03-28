'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type JSX, type MouseEvent } from 'react'

import {
  pickMediaVariant,
  type MediaSizeName,
  type MediaWithSizes,
} from '@/src/lib/pickMediaVariant'
import {
  buildPayloadResponsiveSrc,
  payloadResponsiveImageLoader,
} from '@/src/lib/payloadResponsiveImage'
import { shouldUnoptimizeImage } from '@/src/lib/shouldUnoptimizeImage'
import { getEmbedVideoProvider, getEmbedVideoUrl, isVideoFileUrl } from '@/src/lib/videoEmbed'

type PosterAsset = {
  url: string
  alt?: string | null
} & MediaWithSizes

export type HomeGridMediaAsset = MediaWithSizes & {
  url: string
  alt?: string | null
  mimeType?: string | null
  videoPoster?: PosterAsset | null
  youtubeUrl?: string | null
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
  const [isPlaying, setIsPlaying] = useState(false)
  const [isYouTubeReady, setIsYouTubeReady] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const externalVideoUrl = asset.youtubeUrl?.trim() || null
  const embedProvider = getEmbedVideoProvider(externalVideoUrl)
  const youTubeEmbedUrl =
    embedProvider === 'youtube'
      ? getEmbedVideoUrl(externalVideoUrl, {
          autoplay: false,
          controls: true,
          enableJsApi: true,
          muted: false,
          quality: 'hd1080',
        })
      : null
  const embedUrl =
    embedProvider === 'youtube'
      ? youTubeEmbedUrl
      : getEmbedVideoUrl(externalVideoUrl, {
          autoplay: isPlaying,
          controls: true,
          muted: false,
        })
  const isEmbeddedVideo = Boolean(embedUrl)
  const isVideo = isEmbeddedVideo || asset.mimeType?.startsWith('video/') || isVideoFileUrl(asset.url)
  const imageSrc = buildPayloadResponsiveSrc(asset, preferredSizes)

  useEffect(() => {
    if (!isPlaying || embedProvider !== 'youtube' || !isYouTubeReady) return

    const iframeWindow = iframeRef.current?.contentWindow

    if (!iframeWindow) return

    const postCommand = (func: string, args: unknown[] = []) => {
      iframeWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func,
          args,
        }),
        '*',
      )
    }

    const timer = window.setTimeout(() => {
      postCommand('unMute')
      postCommand('setVolume', [100])
      postCommand('setPlaybackQuality', ['hd1080'])
      postCommand('playVideo')
    }, 150)

    return () => {
      window.clearTimeout(timer)
    }
  }, [embedProvider, isPlaying, isYouTubeReady])

  if (isVideo) {
    const posterMedia = asset.videoPoster ?? asset
    const posterVariant = pickMediaVariant(posterMedia, preferredSizes)
    const posterSrc = buildPayloadResponsiveSrc(posterMedia, preferredSizes)

    const isPosterVideo =
      posterVariant?.mimeType?.startsWith('video/') ||
      posterVariant?.url.match(/\.(mp4|webm|mov|ogg)$/i)

    const shouldRenderImagePoster = posterVariant && !isPosterVideo

    const startPlayback = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setIsPlaying(true)

      if (embedProvider !== 'youtube' && !isEmbeddedVideo) {
        requestAnimationFrame(() => {
          void videoRef.current?.play().catch(() => {})
        })
      }
    }

    const showPosterOverlay =
      shouldRenderImagePoster && (!isPlaying || (embedProvider === 'youtube' && !isYouTubeReady))

    return (
      <div className="absolute inset-0 overflow-hidden bg-transparent">
        {embedProvider === 'youtube' && youTubeEmbedUrl ? (
          <>
            <iframe
              ref={iframeRef}
              src={youTubeEmbedUrl}
              title={title || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading={priority ? 'eager' : 'lazy'}
              onLoad={() => setIsYouTubeReady(true)}
              className={`${className} transition-opacity duration-300 ${showPosterOverlay ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            />

            {showPosterOverlay ? (
              <Image
                src={posterSrc ?? posterVariant.url}
                alt={posterVariant.alt || title || 'GA Home Design'}
                priority={priority}
                loader={posterSrc ? payloadResponsiveImageLoader : undefined}
                unoptimized={posterSrc ? false : shouldUnoptimizeImage(posterVariant.url)}
                fill
                sizes={sizes}
                className={className}
              />
            ) : null}
          </>
        ) : isPlaying || !shouldRenderImagePoster ? (
          isEmbeddedVideo && embedUrl ? (
            <iframe
              key={embedUrl}
              src={embedUrl}
              title={title || 'Video'}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className={className}
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay={isPlaying}
              muted
              loop
              playsInline
              preload="metadata"
              poster={shouldRenderImagePoster ? posterVariant.url : undefined}
              className={className}
            >
              <source src={asset.url} type={asset.mimeType ?? undefined} />
            </video>
          )
        ) : (
          <Image
            src={posterSrc ?? posterVariant.url}
            alt={posterVariant.alt || title || 'GA Home Design'}
            priority={priority}
            loader={posterSrc ? payloadResponsiveImageLoader : undefined}
            unoptimized={posterSrc ? false : shouldUnoptimizeImage(posterVariant.url)}
            fill
            sizes={sizes}
            className={className}
          />
        )}

        {!isPlaying ? (
          <button
            type="button"
            aria-label={`Play ${title || 'video'}`}
            onClick={startPlayback}
            className="absolute inset-0 z-20 flex items-center justify-center bg-transparent transition"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#131313] shadow-lg md:h-20 md:w-20">
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
      src={imageSrc ?? variant.url}
      alt={variant.alt || title || 'GA Home Design'}
      priority={priority}
      loader={imageSrc ? payloadResponsiveImageLoader : undefined}
      unoptimized={imageSrc ? false : shouldUnoptimizeImage(variant.url)}
      fill
      sizes={sizes}
      className={className}
    />
  )
}
