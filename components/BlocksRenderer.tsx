'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type AnyBlock = Record<string, any>

const getT = (b: AnyBlock) => String(b?.__typename ?? '').toLowerCase()

const isTitle = (b: AnyBlock) =>
  ['title', 'titleblock', 'heading'].includes(getT(b)) || 'title' in (b ?? {})

const isParagraph = (b: AnyBlock) =>
  ['paragraph', 'paragraphblock', 'textblock'].includes(getT(b)) || 'paragraph' in (b ?? {})

const isReadMore = (b: AnyBlock) =>
  ['readmore', 'readmoreblock'].includes(getT(b)) || b?.type === 'ReadMore'

function TitleView({ block }: { block: AnyBlock }) {
  return (
    <h2 className="font-medium text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px] md:leading-[38px] lg:leading-[40px] xl:leading-[55px] 2xl:leading-[70.5px] uppercase text-[#131313] text-center whitespace-pre-line">
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

export default function BlocksRenderer({ content }: { content: AnyBlock[] }) {
  const idx = useMemo(() => content.findIndex(isReadMore), [content])
  const [open, setOpen] = useState(false)

  const before = idx === -1 ? content : content.slice(0, idx)
  const hasReadMore = idx !== -1
  const after = idx === -1 ? [] : content.slice(idx + 1)

  return (
    <div className="flex flex-col gap-[9px] md:gap-[10px] lg:gap-[27px] xl:gap-[20px] 2xl:gap-[27px]">
      {/* ДО кнопки — звичайний контент */}
      {before.map((block, i) => {
        if (isTitle(block)) return <TitleView key={`b-${i}`} block={block} />
        if (isParagraph(block)) return <ParagraphView key={`b-${i}`} block={block} />
        return null
      })}

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
            <div className="flex flex-col gap-[9px] md:gap-[10px] lg:gap-[27px] xl:gap-[20px] 2xl:gap-[27px]">
              {after.map((block, i) => {
                const key = `tail-${i}`
                if (isTitle(block)) return <TitleView key={key} block={block} />
                if (isParagraph(block)) return <ParagraphView key={key} block={block} />
                return null
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Кнопка Read more / Read less */}
      {hasReadMore && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="md:mt-[28px] lg:mt-3 outline-none uppercase flex items-center gap-4 md:text-[16px] lg:text-[20px] 2xl:text-[26px] font-medium text-[#131313] transition leading-[165%]"
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
              <path d="M1.2981 9.60498L12.2981 1.60498L23.2981 9.60498" stroke="currentColor" strokeWidth="2.59579" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
