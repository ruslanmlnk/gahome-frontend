'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState, type JSX } from 'react'

type RenderImage = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

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
  if (!image?.url) return null

  return {
    url: image.url,
    alt: image.alt ?? 'Render image',
    width: image.width ?? 1600,
    height: image.height ?? 1000,
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
    const currentSlides =
      openRender !== null
        ? renders[openRender]?.slides
        : renders.length === 1
          ? renders[0]?.slides
          : null

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
    const targetIndex = renders.length === 1 ? activeSlide : activeRender
    const activeCard = cardRefs.current[targetIndex]
    if (!activeCard) return

    activeCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeRender, activeSlide, renders.length])

  if (!renders.length) return null

  const isSingleRender = renders.length === 1
  const singleRender = isSingleRender ? renders[0] : null

  const openedRender = openRender !== null ? renders[openRender] : null
  const openedSlide =
    openedRender && openedRender.slides.length
      ? openedRender.slides[Math.min(activeSlide, openedRender.slides.length - 1)]
      : null

  const openGallery = (index: number, slideIndex = 0) => {
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

  const goToPreviousSingleSlide = () => {
    if (!singleRender) return

    setActiveSlide((current) => (current === 0 ? singleRender.slides.length - 1 : current - 1))
  }

  const goToNextSingleSlide = () => {
    if (!singleRender) return

    setActiveSlide((current) => (current === singleRender.slides.length - 1 ? 0 : current + 1))
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
            {isSingleRender && singleRender ? (
              <>
                {singleRender.slides.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={goToPreviousSingleSlide}
                      className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white"
                    >
                      <span className="text-xl leading-none">&lsaquo;</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={goToNextSingleSlide}
                      className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white"
                    >
                      <span className="text-xl leading-none">&rsaquo;</span>
                    </button>
                  </>
                ) : null}

                <div className="overflow-x-auto px-[10px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-[44px]">
                  <div className="flex items-stretch gap-[12px] py-1 md:gap-[18px] xl:gap-[22px]">
                    {singleRender.slides.map((slide, index) => (
                      <button
                        key={`${slide.url}-${index}`}
                        ref={(element) => {
                          cardRefs.current[index] = element
                        }}
                        type="button"
                        onClick={() => openGallery(0, index)}
                        className={`group relative w-[84vw] shrink-0 snap-center overflow-hidden rounded-[20px] border bg-[#F5F5F5] text-left transition duration-300 md:w-[58vw] xl:w-[38vw] ${
                          index === activeSlide
                            ? 'border-[#131313] shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
                            : 'border-[#E7E7E7] opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div className="relative aspect-[16/10] md:aspect-[16/9]">
                          <Image
                            src={slide.url || ''}
                            alt={slide.alt || 'Render image'}
                            fill
                            sizes="(max-width: 767px) 84vw, (max-width: 1279px) 58vw, 38vw"
                            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          />
                        </div>

                        <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-[12px] text-white md:text-[14px]">
                          {singleRender.slides.length} views
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {singleRender.slides.length > 1 ? (
                  <div className="mt-4 flex items-center justify-center gap-2 text-[#131313]">
                    {singleRender.slides.map((_, index) => (
                      <button
                        key={`single-dot-${index}`}
                        type="button"
                        aria-label={`Go to image ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeSlide ? 'w-8 bg-[#131313]' : 'w-2.5 bg-[#D0D0D0]'
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <>
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
                        onClick={() => openGallery(index)}
                        className={`group relative w-[84vw] shrink-0 snap-center overflow-hidden rounded-[20px] border bg-[#F5F5F5] text-left transition duration-300 md:w-[58vw] xl:w-[38vw] ${
                          index === activeRender
                            ? 'border-[#131313] shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
                            : 'border-[#E7E7E7] opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div className="relative aspect-[16/10] md:aspect-[16/9]">
                          <Image
                            src={render.preview.url || ''}
                            alt={render.preview.alt || 'Render preview'}
                            fill
                            sizes="(max-width: 767px) 84vw, (max-width: 1279px) 58vw, 38vw"
                            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          />
                        </div>

                        {render.slides.length > 1 ? (
                          <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-[12px] text-white md:text-[14px]">
                            {render.slides.length} views
                          </div>
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>

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
              </>
            )}
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

          {openedRender.slides.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={goToPreviousSlide}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white md:left-6"
              >
                <span className="text-xl leading-none">&lsaquo;</span>
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={goToNextSlide}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#131313] shadow-md transition hover:bg-white md:right-6"
              >
                <span className="text-xl leading-none">&rsaquo;</span>
              </button>
            </>
          ) : null}

          <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center gap-4">
            <div className="relative flex-1 overflow-hidden rounded-[20px] bg-black/20">
              <Image
                src={openedSlide.url || ''}
                alt={openedSlide.alt || 'Render gallery image'}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-between text-white">
              <span className="text-[14px] md:text-[16px]">
                {activeSlide + 1} / {openedRender.slides.length}
              </span>
              <span className="text-[12px] opacity-70 md:text-[14px]">ESC to close</span>
            </div>

            {openedRender.slides.length > 1 ? (
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
                    <Image
                      src={slide.url || ''}
                      alt={slide.alt || 'Render gallery thumbnail'}
                      width={140}
                      height={96}
                      className="h-[72px] w-[108px] object-cover md:h-[84px] md:w-[126px]"
                    />
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
