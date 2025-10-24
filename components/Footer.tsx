import Image from 'next/image'
import type { JSX } from 'react'

const navItems = [
  'BEST LOCATION',
  'MORTGAGE',
  '3D VISUALISATION',
  'DOUBLE SAVINGS',
  'HAPPY OWNERS',
  'INNOVATIONS',
]

function SocialIcon({ type }: { type: 'facebook' | 'instagram' | 'x' }): JSX.Element {
  return (
    <a
      href="#"
      aria-label={type}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#131313]"
    >
      {type === 'facebook' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22 12.07C22 6.49 17.52 2 11.94 2 6.36 2 1.88 6.49 1.88 12.07c0 5.01 3.66 9.16 8.44 9.93v-7.02H7.9v-2.9h2.42V9.41c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.12.19 2.12.19v2.33h-1.19c-1.18 0-1.55.74-1.55 1.5v1.8h2.65l-.42 2.9h-2.23V22c4.78-.77 8.44-4.92 8.44-9.93z" />
        </svg>
      )}
      {type === 'instagram' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      )}
      {type === 'x' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      )}
    </a>
  )
}

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#131313] text-white">
      {/* Top area */}
      <div className="mx-auto w-full max-w-[1824px] px-12 pt-10 pb-6">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] items-start">
          <div className="shrink-0">
            <Image src="/images/logo.svg" alt="GA Home Design" width={200} height={60} />
          </div>
          <nav className="justify-self-end w-full max-w-[980px]">
            <ul className="grid grid-cols-1 gap-y-4 text-right md:grid-cols-3 md:gap-x-[80px]">
              {navItems.map((label) => (
                <li key={label} className="text-base font-semibold uppercase tracking-wide">
                  {label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-6 h-px w-full bg-[#4C4C4C]" />
      </div>

      {/* Bottom area */}
      <div className="mx-auto flex w-full max-w-[1824px] items-center justify-between px-12 pb-10">
        <p className="text-[#B7B7B7] text-[16px] md:text-[18px]">2025 Ga Home Design. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="x" />
        </div>
      </div>
    </footer>
  )
}

