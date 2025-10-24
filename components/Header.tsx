import Image from 'next/image'
import type { JSX } from 'react'

const leftLinks = [
  'BEST LOCATION',
  'MORTGAGE',
  '3D VISUALISATION',
]

const rightLinks = [
  'DOUBLE SAVINGS',
  'HAPPY OWNERS',
  'INNOVATIONS',
]

export default function Header(): JSX.Element {
  return (
    <header className="w-full">
      {/* Top announcement bar */}
      <div className="w-full text-center border-b border-[#E7E7E7] text-[#131313] text-[14px] md:text-[15px] xl:text-[20px] px-[63px] h-[55px] md:h-[42px] xl:h-[62px] leading-[22px] flex items-center justify-center">
        EXCLUSIVE HOMES NOW AVAILABLE FOR PRE-SALE
      </div>

      {/* Mobile header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 md:px-6 h-[94px] md:h-[88px] xl:hidden">
        <button
          aria-label="Open menu"
          className="inline-flex h-[14px] md:h-[18.29px] w-[24px] md:w-[32px] flex-col justify-between"
        >
          <span className="h-[2px] w-full bg-[#131313]"></span>
          <span className="h-[2px] w-full bg-[#131313]"></span>
          <span className="h-[2px] w-full bg-[#131313]"></span>
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
              {leftLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-[18px] 2xl:text-[24px] leading-[13px] 2xl:leading-[20px] font-medium uppercase"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center logo block */}
          <div className="flex items-center justify-center h-full w-[212.93px] 2xl:w-[278px] mx-[77.54px_63.54px] 2xl:[81px_61px]">
            <div className="flex h-full w-full items-center justify-center bg-black border border-[#E7E7E7] p-6">
              <Image
                src="/images/logo.svg"
                alt="GA Home Design"
                width={206}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Right nav */}
          <nav className="flex-1 flex justify-end">
            <ul className="flex items-center gap-[50px] 2xl:gap-[80px]">
              {rightLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-[18px] 2xl:text-[24px] leading-[13px] 2xl:leading-[20px] font-medium uppercase"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
