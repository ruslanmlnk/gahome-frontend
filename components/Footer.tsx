import Image from 'next/image'
import Link from 'next/link'
import type { Route } from 'next'
import type { JSX } from 'react'

const navLinks: { label: string; href: Route }[] = [
  { label: 'BEST LOCATION', href: '/location' as Route },
  { label: 'MORTGAGE', href: '/mortgage' as Route },
  { label: '3D VISUALISATION', href: '/visualisation' as Route },
  { label: 'DOUBLE SAVINGS', href: '/savings' as Route },
  { label: 'HAPPY OWNERS', href: '/owners' as Route },
  { label: 'INNOVATIONS', href: '/innovations' as Route },
]

function SocialIcon({ type }: { type: 'facebook' | 'instagram' | 'x' }): JSX.Element {
  const hrefMap: Record<'facebook' | 'instagram' | 'x', string> = {
    instagram:
      'https://www.instagram.com/plumb_supplyigsh=Zndma2kzM244NGxt&utm_source=qr',
    facebook:
      'https://www.facebook.com/share/1A5EPBLcMr/?mibextid=wwXIfr',
    x: '#',
  }
  const className =
    'inline-flex h-8 w-8 md:h-9 md:w-9 2xl:h-12 2xl:w-12 items-center justify-center rounded-full bg-white text-[#131313]'
  return (
    <a
      href={hrefMap[type]}
      aria-label={type}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {type === 'facebook' && (
        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.00375 11.2891H0.525657C0.125157 11.2891 0 11.1389 0 10.7635V7.73467C0 7.33417 0.150188 7.20901 0.525657 7.20901H3.00375V5.00626C3.00375 4.00501 3.17897 3.05382 3.6796 2.17772C4.20526 1.2766 4.95619 0.675845 5.90738 0.325407C6.53317 0.100125 7.15895 0 7.83479 0H10.2879C10.6383 0 10.7885 0.150188 10.7885 0.500626V3.35419C10.7885 3.70463 10.6383 3.85482 10.2879 3.85482C9.61201 3.85482 8.93617 3.85482 8.26032 3.87985C7.58448 3.87985 7.23404 4.20526 7.23404 4.90613C7.20901 5.65707 7.23404 6.38298 7.23404 7.15895H10.1377C10.5382 7.15895 10.6884 7.30914 10.6884 7.70964V10.7384C10.6884 11.1389 10.5632 11.2641 10.1377 11.2641H7.23404V19.4243C7.23404 19.8498 7.10889 20 6.65832 20H3.52941C3.15394 20 3.00375 19.8498 3.00375 19.4743V11.2891Z" fill="#131313" />
        </svg>

      )}
      {type === 'instagram' && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0H5C2.24 0 0 2.24 0 5V15C0 17.76 2.24 20 5 20H15C17.76 20 20 17.76 20 15V5C20 2.24 17.76 0 15 0ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15ZM15.35 5.62C14.8 5.62 14.35 5.17 14.35 4.62C14.35 4.07 14.8 3.62 15.35 3.62C15.9 3.62 16.35 4.07 16.35 4.62C16.35 5.17 15.9 5.62 15.35 5.62Z" fill="#131313" />
          <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="#131313" />
        </svg>

      )}
      {type === 'x' && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_514_184)">
            <path d="M11.8947 8.46958L19.3352 0H17.5726L11.1094 7.35251L5.95102 0H0L7.80214 11.1194L0 19.9999H1.76253L8.58348 12.2338L14.0323 19.9999H19.9833M2.39866 1.30158H5.10639L17.5713 18.7623H14.8629" fill="#131313" />
          </g>
          <defs>
            <clipPath id="clip0_514_184">
              <rect width="19.9833" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

      )}
    </a>
  )
}

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#131313] text-white 2xl:mt-[120px] xl:mt-[88.5px] lg:mt-[55px] md:mt-[43px] mt-[29px]">
      {/* Top area */}
      <div className="mx-auto w-full max-w-[1920px] md:p-6 lg:pb-9 xl:p-9 2xl:p-12 py-9 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-12 md:mb-0">
            <Image src="/images/logo.svg" alt="GA Home Design" width={206} height={100} className='xl:w-[206px] lg:w-[140px] lg:h-[68px] md:w-[123.7px] md:h-[60px] w-[140px] h-[68px]'/>
          </div>
          <nav className="justify-self-end w-full md:max-w-[600px] lg:max-w-[562px] xl:max-w-[734px] 2xl:max-w-[839px]">
            <ul className="flex flex-col md:flex-row flex-wrap justify-end md:gap-x-[42px] md:gap-y-[15px] lg:gap-x-[68px] lg:gap-y-[21px] xl:gap-y-12 gap-x-[100px]  gap-[22px] text-left md:text-right">
              {navLinks.map(({ label, href }) => (
                <li
                  key={label}
                  className="text-[16px] md:text-[14px] xl:text-[20px] 2xl:text-[24px] leading-[23px] font-medium uppercase md:w-[142px] xl:w-[178px] 2xl:w-[213px] text-left md:text-right"
                >
                  <Link href={href} className="block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

          </nav>
        </div>
        <div className="mt-9 md:mt-6 lg:mt-12 h-px w-full bg-[#4C4C4C]" />
      </div>

      {/* Bottom area */}
      <div className="mx-auto flex flex-col md:flex-row gap-9 md:gap-0 w-full max-w-[1920px] items-start justify-between 2xl:px-12 2xl:pb-12 xl:px-9 xl:pb-9 md:px-6 md:pb-6 px-4 pb-9">
        <p className="text-[#B7B7B7] text-[16px] md:text-[14px] lg:text-[18px] lg:leading-[13px] xl:text-[20px] xl:leading-[14px] 2xl:text-[26px] 2xl:leading-[18px]">2025 Ga Home Design. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
        </div>
      </div>
    </footer>
  )
}
