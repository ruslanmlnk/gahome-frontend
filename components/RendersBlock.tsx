'use client'

import Image from 'next/image'
import { pickMediaVariant, type MediaWithSizes } from '@/src/lib/pickMediaVariant'
import {
  buildPayloadResponsiveSrc,
  payloadResponsiveImageLoader,
} from '@/src/lib/payloadResponsiveImage'
import { resolveMediaUrl } from '@/src/lib/resolveMediaUrl'
import { shouldUnoptimizeImage } from '@/src/lib/shouldUnoptimizeImage'
import { useEffect, useMemo, useRef, useState, type JSX } from 'react'

type RenderImage = MediaWithSizes

type RenderGalleryItem = {
  image?: RenderImage | null
}

type RenderItem = {
  mainImage?: RenderImage | null
  gallery?: RenderGalleryItem[] | null
}

type NormalizedRender = {
  preview: RenderImage
  slides: RenderImage[]
}

function normalizeImage(image: RenderImage | null | undefined): RenderImage | null {
  const url = resolveMediaUrl(image?.url)
  if (!url) return null

  return {
    url,
    alt: image?.alt ?? 'Render image',
    width: image?.width ?? 1600,
    height: image?.height ?? 1000,
    sizes: image?.sizes ?? null,
  }
}

function dedupeImages(images: RenderImage[]): RenderImage[] {
  const seen = new Set<string>()

  return images.filter((image) => {
    const key = image.url ?? ''

    if (!key || seen.has(key)) return false

    seen.add(key)
    return true
  })
}

function getGalleryPreloadUrl(slide?: RenderImage | null): string | null {
  return pickMediaVariant(slide, ['desktop', 'tablet', 'card'])?.url ?? resolveMediaUrl(slide?.url)
}

function preloadGallerySlides(
  slides: RenderImage[],
  cache: Set<string>,
  priorityIndex = 0,
): void {
  if (typeof window === 'undefined' || !slides.length) return

  const normalizedIndex = ((priorityIndex % slides.length) + slides.length) % slides.length
  const orderedSlides = [...slides.slice(normalizedIndex), ...slides.slice(0, normalizedIndex)]

  orderedSlides.forEach((slide) => {
    const preloadUrl = getGalleryPreloadUrl(slide)

    if (!preloadUrl || cache.has(preloadUrl)) return

    cache.add(preloadUrl)

    const image = new window.Image()
    image.decoding = 'async'
    image.src = preloadUrl
  })
}

export default function RendersBlock({ items }: { items?: RenderItem[] | null }): JSX.Element | null {
  const renders = useMemo<NormalizedRender[]>(() => {
    if (!Array.isArray(items)) return []

    return items
      .map((item) => {
        const preview = normalizeImage(item?.mainImage)

        if (!preview) return null

        const gallery = Array.isArray(item?.gallery)
          ? item.gallery
              .map((galleryItem) => normalizeImage(galleryItem?.image))
              .filter((image): image is RenderImage => Boolean(image))
          : []

        return {
          preview,
          slides: dedupeImages([preview, ...gallery]),
        }
      })
      .filter((item): item is NormalizedRender => Boolean(item))
  }, [items])

  const [activeRender, setActiveRender] = useState(0)
  const [openRender, setOpenRender] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([])
  const preloadedGalleryImages = useRef(new Set<string>())

  useEffect(() => {
    if (!renders.length) {
      setActiveRender(0)
      setOpenRender(null)
      setActiveSlide(0)
      return
    }

    setActiveRender((current) => Math.min(current, renders.length - 1))
  }, [renders.length])

  useEffect(() => {
    const currentSlides = openRender !== null ? renders[openRender]?.slides : null

    if (!currentSlides?.length) {
      setActiveSlide(0)
      return
    }

    setActiveSlide((current) => Math.min(current, currentSlides.length - 1))
  }, [openRender, renders])

  useEffect(() => {
    if (openRender === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenRender(null)
        return
      }

      if (event.key === 'ArrowLeft') {
        setActiveSlide((current) =>
          current === 0 ? (renders[openRender]?.slides.length ?? 1) - 1 : current - 1,
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveSlide((current) =>
          current === (renders[openRender]?.slides.length ?? 1) - 1 ? 0 : current + 1,
        )
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [openRender, renders])

  useEffect(() => {
    if (!renders.length) return

    if (openRender !== null) {
      preloadGallerySlides(renders[openRender]?.slides ?? [], preloadedGalleryImages.current, activeSlide)
      return
    }

    preloadGallerySlides(renders[activeRender]?.slides ?? [], preloadedGalleryImages.current)
  }, [activeRender, activeSlide, openRender, renders])

  const initialScrollDone = useRef(false)

  useEffect(() => {
    if (!renders.length) return

    if (!initialScrollDone.current) {
      initialScrollDone.current = true
      return
    }

    const targetIndex = activeRender
    const activeCard = cardRefs.current[targetIndex]
    if (!activeCard) return

    activeCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeRender, activeSlide, renders.length])

  if (!renders.length) return null

  const openedRender = openRender !== null ? renders[openRender] : null
  const openedSlide =
    openedRender && openedRender.slides.length
      ? openedRender.slides[Math.min(activeSlide, openedRender.slides.length - 1)]
      : null

  const showGalleryNav = Boolean(openedRender && openedRender.slides.length > 1)

  const openGallery = (index: number, slideIndex = 0) => {
    preloadGallerySlides(renders[index]?.slides ?? [], preloadedGalleryImages.current, slideIndex)
    setActiveRender(index)
    setOpenRender(index)
    setActiveSlide(slideIndex)
  }

  const goToPreviousRender = () => {
    setActiveRender((current) => (current === 0 ? renders.length - 1 : current - 1))
  }

  const goToNextRender = () => {
    setActiveRender((current) => (current === renders.length - 1 ? 0 : current + 1))
  }

  const goToPreviousSlide = () => {
    if (!openedRender) return

    setActiveSlide((current) => (current === 0 ? openedRender.slides.length - 1 : current - 1))
  }

  const goToNextSlide = () => {
    if (!openedRender) return

    setActiveSlide((current) => (current === openedRender.slides.length - 1 ? 0 : current + 1))
  }

  return (
    <>
      <section className="mt-[12px] w-full md:mt-[20px] lg:mt-[24px]">
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="relative">
            {renders.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous render"
                  onClick={goToPreviousRender}
                  className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white"
                >
                  <span className="text-xl leading-none">&lsaquo;</span>
                </button>
                <button
                  type="button"
                  aria-label="Next render"
                  onClick={goToNextRender}
                  className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white"
                >
                  <span className="text-xl leading-none">&rsaquo;</span>
                </button>
              </>
            ) : null}

            <div className="overflow-x-auto px-[10px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-[44px]">
              <div className="flex items-stretch gap-[12px] py-1 md:gap-[18px] xl:gap-[22px]">
                {renders.map((render, index) => (
                  <button
                    key={`${render.preview.url}-${index}`}
                    ref={(element) => {
                      cardRefs.current[index] = element
                    }}
                    type="button"
                    onPointerEnter={() => preloadGallerySlides(render.slides, preloadedGalleryImages.current)}
                    onFocus={() => preloadGallerySlides(render.slides, preloadedGalleryImages.current)}
                    onClick={() => openGallery(index)}
                    className={`group relative w-[84vw] shrink-0 snap-center overflow-hidden rounded-[20px] border bg-[#F5F5F5] text-left transition duration-300 md:w-[58vw] xl:w-[38vw] ${
                      index === activeRender
                        ? 'border-[#131313] shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
                        : 'border-[#E7E7E7] opacity-80 hover:opacity-100'
                    }`}
                  >
                    {(() => {
                      const previewVariant = pickMediaVariant(render.preview, ['card', 'tablet', 'desktop'])
                      const previewSrc = buildPayloadResponsiveSrc(render.preview, ['card', 'tablet', 'desktop'])

                      if (!previewVariant) return null

                      return (
                        <div className="relative aspect-[16/10] md:aspect-[16/9]">
                          <Image
                            src={previewSrc ?? previewVariant.url}
                            alt={previewVariant.alt || 'Render preview'}
                            loader={previewSrc ? payloadResponsiveImageLoader : undefined}
                            unoptimized={previewSrc ? false : shouldUnoptimizeImage(previewVariant.url)}
                            fill
                            sizes="(max-width: 767px) 84vw, (max-width: 1279px) 58vw, 38vw"
                            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          />
                        </div>
                      )
                    })()}

                    {render.slides.length > 1 ? (
                      <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-[12px] text-white md:text-[14px]">
                        {render.slides.length} views
                      </div>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            {renders.length > 1 ? (
              <div className="mt-4 flex items-center justify-center gap-2 text-[#131313]">
                {renders.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Go to render ${index + 1}`}
                    onClick={() => setActiveRender(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeRender ? 'w-8 bg-[#131313]' : 'w-2.5 bg-[#D0D0D0]'
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {openedRender && openedSlide ? (
        <div className="fixed inset-0 z-50 bg-black/90 px-4 py-6 md:px-8 md:py-8">
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setOpenRender(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#131313] shadow-md transition hover:scale-105 md:right-6 md:top-6"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>

          {showGalleryNav ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={goToPreviousSlide}
                className="absolute left-3 top-[42%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white md:left-6 md:top-[44%]"
              >
                <span className="text-xl leading-none">&lsaquo;</span>
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={goToNextSlide}
                className="absolute right-3 top-[42%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white md:right-6 md:top-[44%]"
              >
                <span className="text-xl leading-none">&rsaquo;</span>
              </button>
            </>
          ) : null}

          <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center gap-4">
            <div className="relative flex-1 overflow-hidden rounded-[20px] bg-black/20">
              {(() => {
                const openedVariant = pickMediaVariant(openedSlide, ['desktop', 'tablet', 'card'])
                const openedSrc = buildPayloadResponsiveSrc(openedSlide, ['card', 'tablet', 'desktop'])

                if (!openedVariant) return null

                return (
                  <Image
                    key={openedSlide.url}
                    src={openedSrc ?? openedVariant.url}
                    alt={openedVariant.alt || 'Render gallery image'}
                    loader={openedSrc ? payloadResponsiveImageLoader : undefined}
                    unoptimized={openedSrc ? false : shouldUnoptimizeImage(openedVariant.url)}
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-contain"
                  />
                )
              })()}
            </div>

            <div className="flex items-center justify-between text-white">
              {showGalleryNav ? (
                <span className="text-[14px] md:text-[16px]">
                  {activeSlide + 1} / {openedRender.slides.length}
                </span>
              ) : (
                <span />
              )}
              <span className="text-[12px] opacity-70 md:text-[14px]">ESC to close</span>
            </div>

            {showGalleryNav ? (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {openedRender.slides.map((slide, index) => (
                  <button
                    key={`${slide.url}-${index}`}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`relative shrink-0 overflow-hidden rounded-[14px] border transition ${
                      index === activeSlide
                        ? 'border-white shadow-md'
                        : 'border-white/20 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {(() => {
                      const thumbnailVariant = pickMediaVariant(slide, ['thumbnail', 'card', 'tablet'])
                      const thumbnailSrc = buildPayloadResponsiveSrc(slide, ['thumbnail', 'card', 'tablet'])

                      if (!thumbnailVariant) return null

                      return (
                        <Image
                          src={thumbnailSrc ?? thumbnailVariant.url}
                          alt={thumbnailVariant.alt || 'Render gallery thumbnail'}
                          loader={thumbnailSrc ? payloadResponsiveImageLoader : undefined}
                          unoptimized={thumbnailSrc ? false : shouldUnoptimizeImage(thumbnailVariant.url)}
                          width={thumbnailVariant.width || 140}
                          height={thumbnailVariant.height || 96}
                          className="h-[72px] w-[108px] object-cover md:h-[84px] md:w-[126px]"
                        />
                      )
                    })()}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
