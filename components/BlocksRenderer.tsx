'use client'

import Image from 'next/image'
import RendersBlock from '@/components/RendersBlock'
import {
  pickMediaVariant,
  type MediaWithSizes,
  type PickedMediaVariant,
} from '@/src/lib/pickMediaVariant'
import { shouldUnoptimizeImage } from '@/src/lib/shouldUnoptimizeImage'
import { useEffect, useMemo, useState } from 'react'

type AnyBlock = Record<string, any>
type MotionModule = typeof import('framer-motion')


const defaultStyle = "container text-center mx-auto px-[16px] md:px-[86px] lg:px-[107px] xl:px-[123px] 2xl:px-[200px] flex flex-col 2xl:max-w-[1920px]";
const getT = (b: AnyBlock) => String(b?.__typename ?? '').toLowerCase()

const isTitle = (b: AnyBlock) =>
  ['title', 'titleblock', 'heading'].includes(getT(b)) || 'title' in (b ?? {})

const isParagraph = (b: AnyBlock) =>
  ['paragraph', 'paragraphblock', 'textblock'].includes(getT(b)) || 'paragraph' in (b ?? {})

const isGallery = (b: AnyBlock) =>
  ['imagegallery', 'gallery', 'galleryblock'].includes(getT(b)) ||
  (Array.isArray(b?.items) && b.items.every((item: AnyBlock) => 'image' in (item ?? {})))

const isRenders = (b: AnyBlock) =>
  ['renders', 'rendersblock'].includes(getT(b)) ||
  (Array.isArray(b?.items) && b.items.some((item: AnyBlock) => 'mainImage' in (item ?? {})))

const isReadMore = (b: AnyBlock) =>
  ['readmore', 'readmoreblock'].includes(getT(b)) || b?.type === 'ReadMore'

const isDisclaimer = (b: AnyBlock) =>
  ['disclaimer', 'disclaimerblock'].includes(getT(b)) || getT(b) === 'disclaimer'

const getParagraphHTML = (value: unknown): { __html: string } => {
  const input = String(value ?? '')

  const sanitized = input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/\son\w+=(["']).*?\1/gi, '')
    .replace(/\son\w+=([^\s>]+)/gi, '')
    .replace(/\s(href|src)=(["'])\s*javascript:[\s\S]*?\2/gi, '')
    .replace(/\n/g, '<br />')

  return { __html: sanitized }
}

function TitleView({ block }: { block: AnyBlock }) {
  return (
    <h2 className="font-medium text-[20px] md:text-[22px] lg:text-[26px] xl:text-[36px] md:leading-[38px] lg:leading-[40px] xl:leading-[55px] 2xl:leading-[70.5px] uppercase text-[#131313] text-center whitespace-pre-line">
      {String(block?.title ?? '').replace(/\\n/g, '\n')}
    </h2>
  )
}

function ParagraphView({ block }: { block: AnyBlock }) {
  const weightClass = block?.strong ? 'md:text-[20px] font-medium' : 'font-normal'
  // теж компенсація для потоку, щоб не було перекриття
  return (
    <p
      className={`text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] ${weightClass} leading-[23px] md:leading-[25px] xl:leading-[34px] 2xl:leading-[39px] text-[#878787] text-center tracking-[-0.03px] [&_a]:underline [&_a]:underline-offset-4`}
      dangerouslySetInnerHTML={getParagraphHTML(block?.paragraph)}
    />
  )
}

function GalleryView({ block }: { block: AnyBlock }) {
  const items: PickedMediaVariant[] = Array.isArray(block?.items)
    ? block.items
        .map((item: AnyBlock) => {
          return pickMediaVariant(item?.image as MediaWithSizes, ['card', 'tablet', 'desktop'])
        })
        .filter((image): image is PickedMediaVariant => Boolean(image?.url))
    : []

  if (!items.length) return null

  return (
    <section className="w-full mt-[12px] md:mt-[20px] lg:mt-[24px]">
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px] xl:gap-[15px] items-start">
          {items.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="group overflow-hidden bg-[#F5F5F5]"
            >
              <Image
                src={image.url}
                alt={image.alt || 'Gallery image'}
                unoptimized={shouldUnoptimizeImage(image.url)}
                width={Number(image.width) || 1600}
                height={Number(image.height) || 1200}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function renderBlock(block: AnyBlock, key: string) {
  if (isTitle(block)) return <TitleView key={key} block={block} />
  if (isParagraph(block)) return <ParagraphView key={key} block={block} />
  if (isGallery(block)) return <GalleryView key={key} block={block} />
  if (isRenders(block)) return <RendersBlock key={key} items={block?.items} />
  return null
}

function DisclaimerView({ block }: { block: AnyBlock }) {
  const text = String(block?.text ?? '').trim()
  if (!text) return null
  return (
    <section className="px-4 md:px-6 xl:px-[36px] 2xl:px-12 mt-[37px] text-center text-white md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
      <div className='bg-[#131313] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] p-6 lg:py-12 2xl:px-[157px] lg:px-[48px] leading-[165%] lg:roundex-0 xl:rounded-[20px] 2xl:rounded-[0px]'>
        <span className="font-medium">Disclaimer: </span>{text}
      </div>
    </section>
  )
}

export default function BlocksRenderer({ content }: { content: AnyBlock[] }) {
  const idx = useMemo(() => content.findIndex(isReadMore), [content])
  const [open, setOpen] = useState(false)
  const [motionModule, setMotionModule] = useState<MotionModule | null>(null)

  const before = idx === -1 ? content : content.slice(0, idx)
  const hasReadMore = idx !== -1
  const after = idx === -1 ? [] : content.slice(idx + 1)
  const disclaimerBlocks = useMemo(() => content.filter(isDisclaimer), [content])

  useEffect(() => {
    let isMounted = true

    import('framer-motion')
      .then((module) => {
        if (isMounted) setMotionModule(module)
      })
      .catch(() => {
        if (isMounted) setMotionModule(null)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const AnimatePresence = motionModule?.AnimatePresence
  const MotionDiv = motionModule?.motion?.div

  const readMoreContent = hasReadMore && open && (
    <div className={`flex flex-col gap-[9px] md:gap-[14px] lg:gap-[27px] xl:gap-[20px] 2xl:gap-[19px] `}>
      {after.map((block, i) => {
        return renderBlock(block, `tail-${i}`)
      })}
    </div>
  )

  return (
    <div className={`${defaultStyle} flex flex-col gap-[9px] md:gap-[14px] lg:gap-[27px] xl:gap-[20px] 2xl:gap-[19px]`}>
      {/* ДО кнопки — звичайний контент */}
      {/* <section className={defaultStyle}> */}

        {before.map((block, i) => {
          return renderBlock(block, `b-${i}`)
        })}

      {/* </section> */}
      {/* ПЕРЕД кнопкою — прихований контент */}
      {AnimatePresence && MotionDiv ? (
        <AnimatePresence initial={false}>
          {hasReadMore && open && (
            <MotionDiv
              id="readmore-content"
              key="rm"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              {readMoreContent}
              {disclaimerBlocks[0] ? (
                <DisclaimerView block={disclaimerBlocks[0]} />
              ) : null}
            </MotionDiv>
          )}
        </AnimatePresence>
      ) : hasReadMore && open ? (
        <div id="readmore-content" className="overflow-hidden">
          {readMoreContent}
          {disclaimerBlocks[0] ? (
            <DisclaimerView block={disclaimerBlocks[0]} />
          ) : null}
        </div>
      ) : null}

      {/* Кнопка Read more / Read less */}
      {hasReadMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="mt-[16px] md:mt-[33px] lg:mt-[15px] outline-none uppercase flex items-center gap-4 md:text-[16px] lg:text-[20px] 2xl:text-[26px] font-medium text-[#131313] transition leading-[11px] lg:leading-[14px] lg:mt-7 2xl:leading-[18px] 2xl:mt-6"
            aria-expanded={open}
            aria-controls="readmore-content"
          >
            <span>{open ? 'Read less' : 'Read more'}</span>
            <svg
              width="25"
              height="11"
              viewBox="0 0 25 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${!open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M1.2981 9.60498L12.2981 1.60498L23.2981 9.60498" stroke="currentColor" strokeWidth="2.59579" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
