import type { JSX } from 'react'

type Item = {
  title: string
  description: string
}

const DEFAULT_ITEMS: Item[] = [
  {
    title: 'PRIMARY RESIDENCE',
    description:
      'Financing options designed for purchasing your first or primary home, with clear terms and a smooth approval process.',
  },
  {
    title: 'SECOND HOME',
    description:
      'Programs for purchasing a second residence or vacation home, with flexible terms and usage guidelines.',
  },
  {
    title: 'SHORT-TERM RENTAL (AIRBNB / VACATION RENTAL)',
    description:
      'Specialized mortgage solutions for properties intended for short-term rental income, aligned with lender requirements for STR properties.',
  },
  {
    title: 'INVESTMENT PROPERTY',
    description:
      'Financing options for investors—whether you’re building a rental portfolio, pursuing long-term leasing, or following a build-to-rent strategy.',
  },
]

export default function GridContent({ items = DEFAULT_ITEMS }: { items?: Item[] }): JSX.Element {
  return (
    <section className="w-full mb-[15px] md:mt-0">
      <div className="mx-auto w-full max-w-[1920px] 2xl:px-12 xl:px-9 md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:gap-[32px] xl:gap-[36px] gap-[24px]">
          {items.map((it, i) => (
            <article
              key={i}
              className="border border-[#E7E7E7] bg-white p-6 lg:p-[32px] xl:p-12"
            >
              <h3 className="uppercase text-[#131313] font-medium text-[24px] md:text-[22px] lg:text-[26px] xl:text-[36px] 2xl:text-[48px] leading-[28.5px] md:leading-[100%] whitespace-pre-line">
                {it.title.replace(/\\n/g, '\n')}
              </h3>
              <p className="mt-[34px] md:mt-[70px] 2xl:mt-[100px] text-[#9A9A9A] md:leading-[23px] lg:leading-[24px] xl:leading-[25px] 2xl:leading-[35px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[26px] 2xl:max-w-[800px]">
                {it.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
