'use client'
import { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState, type JSX } from 'react'

const leftLinks: { label: string; href: Route }[] = [
  { label: 'BEST LOCATION', href: '/location' as Route },
  { label: 'MORTGAGE', href: '/mortgage' as Route },
  { label: '3D VISUALISATION', href: '/visualisation' as Route },
]

const rightLinks: { label: string; href: Route }[] = [
  { label: 'DOUBLE SAVINGS', href: '/savings' as Route },
  { label: 'HAPPY OWNERS', href: '/owners' as Route },
  { label: 'INNOVATIONS', href: '/innovations' as Route },
]

const menuLinks: { label: string; href: Route }[] = [...leftLinks, ...rightLinks]


export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full">
      <div className="w-full text-center border-b border-[#E7E7E7] text-[#131313] text-[14px] md:text-[15px] xl:text-[20px] px-[63px] h-[55px] md:h-[42px] xl:h-[62px] leading-[22px] flex items-center justify-center">
        EXCLUSIVE HOMES NOW AVAILABLE FOR PRE-SALE
      </div>

      <div className="flex items-center justify-between border-b border-gray-200 px-4 md:px-6 h-[94px] md:h-[88px] xl:hidden">
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="relative inline-flex items-center justify-center w-[24px] md:w-[32px] h-[24px] md:h-[32px]"
        >
          {open ? (
            <>
              <span className="absolute block h-[2px] w-full bg-[#131313] rotate-45"></span>
              <span className="absolute block h-[2px] w-full bg-[#131313] -rotate-45"></span>
            </>
          ) : (
            <span className="inline-flex h-[14px] md:h-[18.29px] w-[24px] md:w-[32px] flex-col justify-between">
              <span className="h-[2px] w-full bg-[#131313]"></span>
              <span className="h-[2px] w-full bg-[#131313]"></span>
              <span className="h-[2px] w-full bg-[#131313]"></span>
            </span>
          )}
        </button>

        <div className="w-[128px] h-[62px]">
          <Image
            src="/images/logomob.svg"
            alt="GA Home Design"
            width={140}
            height={50}
            priority
          />
        </div>
      </div>

      {/* Desktop header */}
      <div className="w-full border-b border-gray-200 hidden xl:flex">
        <div className="mx-auto hidden w-full max-w-[1440px] h-[127px] 2xl:h-[148px] 2xl:max-w-[1920px] items-center justify-between px-9 2xl:px-[48px] xl:flex">
          {/* Left nav */}
          <nav className="flex-1">
            <ul className="flex items-center gap-[50px] 2xl:gap-[80px]">
              {leftLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[18px] 2xl:text-[24px] leading-[13px] 2xl:leading-[20px] font-medium uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center logo block */}
          <Link href="/" className="flex items-center justify-center h-full w-[212.93px] 2xl:w-[278px] mx-[77.54px_63.54px] 2xl:[81px_61px]">
            <div className="flex h-full w-full items-center justify-center bg-black border border-[#E7E7E7] p-6">
              <Image
                src="/images/logo.svg"
                alt="GA Home Design"
                width={206}
                height={100}
                priority
              />
            </div>
          </Link>

          {/* Right nav */}
          <nav className="flex-1 flex justify-end">
            <ul className="flex items-center gap-[50px] 2xl:gap-[80px]">
              {rightLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[18px] 2xl:text-[24px] leading-[13px] 2xl:leading-[20px] font-medium uppercase"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>


       {open && (
        <div className="fixed left-0 right-0 bottom-0 top-[149px] md:top-[130px] xl:hidden z-40 bg-white/70 backdrop-blur-xl flex flex-col items-center pt-10 gap-8 text-[#131313] uppercase text-[22px] font-medium transition-all duration-300">
          {menuLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="tracking-[0.05em] hover:opacity-70 transition-opacity text-[16px] md:text-[14px] xl:text-[20px] 2xl:text-[24px] leading-[23px] font-medium uppercase"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
