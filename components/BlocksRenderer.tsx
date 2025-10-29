'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type AnyBlock = Record<string, any>


const defaultStyle = "container text-center mx-auto px-[16px] md:px-[86px] lg:px-[107px] xl:px-[123px] 2xl:px-[200px] flex flex-col 2xl:max-w-[1920px]";
const getT = (b: AnyBlock) => String(b?.__typename ?? '').toLowerCase()

const isTitle = (b: AnyBlock) =>
  ['title', 'titleblock', 'heading'].includes(getT(b)) || 'title' in (b ?? {})

const isParagraph = (b: AnyBlock) =>
  ['paragraph', 'paragraphblock', 'textblock'].includes(getT(b)) || 'paragraph' in (b ?? {})

const isReadMore = (b: AnyBlock) =>
  ['readmore', 'readmoreblock'].includes(getT(b)) || b?.type === 'ReadMore'

const isDisclaimer = (b: AnyBlock) =>
  ['disclaimer', 'disclaimerblock'].includes(getT(b)) || getT(b) === 'disclaimer'

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
    <p className={`text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] ${weightClass} leading-[23px] md:leading-[25px] xl:leading-[34px] 2xl:leading-[39px] text-[#878787] text-center whitespace-pre-line tracking-[-0.03px] `}>
      {block?.paragraph}
    </p>
  )
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

  const before = idx === -1 ? content : content.slice(0, idx)
  const hasReadMore = idx !== -1
  const after = idx === -1 ? [] : content.slice(idx + 1)
  const disclaimerBlocks = useMemo(() => content.filter(isDisclaimer), [content])

  return (
    <div className={`${defaultStyle} flex flex-col gap-[9px] md:gap-[14px] lg:gap-[27px] xl:gap-[20px] 2xl:gap-[19px]`}>
      {/* ДО кнопки — звичайний контент */}
      {/* <section className={defaultStyle}> */}

        {before.map((block, i) => {
          if (isTitle(block)) return <TitleView key={`b-${i}`} block={block} />
          if (isParagraph(block)) return <ParagraphView key={`b-${i}`} block={block} />
          return null
        })}

      {/* </section> */}
      {/* ПЕРЕД кнопкою — прихований контент з auto-height анімацією */}
      <AnimatePresence initial={false}>
        {hasReadMore && open && (
          <motion.div
            id="readmore-content"
            key="rm" // ключ для AnimatePresence
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden" // без mt — щільно прилягає
          >
            <div className={`flex flex-col gap-[9px] md:gap-[14px] lg:gap-[27px] xl:gap-[20px] 2xl:gap-[19px] `}>
              {after.map((block, i) => {
                const key = `tail-${i}`
                if (isTitle(block)) return <TitleView key={key} block={block} />
                if (isParagraph(block)) return <ParagraphView key={key} block={block} />
                return null
              })}
            </div>
            {disclaimerBlocks[0] ? (
              <DisclaimerView block={disclaimerBlocks[0]} />
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

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
