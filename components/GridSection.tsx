import Image from 'next/image'
import Link from 'next/link';
import type { JSX } from 'react'


type Item = { title?: string; image?: { url: string; alt?: string } | null }

type Props = {
    gridSection?: {
        item1?: Item
        item2?: Item
        item3?: Item
        item4?: Item
        item5?: Item
        item6?: Item
        item7?: Item
    }
}

export default function GridSection({ gridSection }: Props) {
    //   if (!gridSection) return null
  const items = [
    'http://admin.homegudzdesign.com' + gridSection?.item1?.image?.url ||"/images/grid/1.png",
    'http://admin.homegudzdesign.com' + gridSection?.item2?.image?.url ||"/images/grid/2.png",
    'http://admin.homegudzdesign.com' + gridSection?.item3?.image?.url ||"/images/grid/3.png",
    'http://admin.homegudzdesign.com' + gridSection?.item4?.image?.url ||"/images/grid/4.png",
    'http://admin.homegudzdesign.com' + gridSection?.item5?.image?.url ||"/images/grid/5.png",
    'http://admin.homegudzdesign.com' + gridSection?.item6?.image?.url ||"/images/grid/6.jpg",
    'http://admin.homegudzdesign.com' + gridSection?.item7?.image?.url ||"/images/grid/7.jpg",
  ]
  const itemTitles = [
    gridSection?.item1?.title || "BEST LOCATION",
    gridSection?.item2?.title || "BEST LOCATION",
    gridSection?.item3?.title || "Mortgage Programs",
    gridSection?.item4?.title || "3D visualisatioN",
    gridSection?.item5?.title || "double savings",
    gridSection?.item6?.title || "happy owners",
    gridSection?.item7?.title || "innovations",
  ]
    return (
        <section className='w-full 2xl:max-w-[1920px] mx-auto 2xl:pt-[15px] 2xl:pb-[120px] xl:pb-[85px] xl:pt-[10px] md:pt-[5px] pt-[32px] md:pb-[55px] pb-[55px] grid gap-[5px] xl:gap-[10px] 2xl:gap-[15px]'>
            <section className='w-full 2xl:h-[692px] xl:h-[480px] lg:h-[410px] md:h-[360px] h-[312px] relative'>
                <Link href="/dream">
                <Image
                    src={items[0]}
                    alt="GA Home Design"
                    priority
                    fill
                    className='object-cover'
                />
                </Link>
            </section>
            <section className='flex-col md:flex-row w-full 2xl:h-[692px] xl:h-[480px] lg:h-[410px] md:h-[360px] flex 2xl:gap-[15px] xl:gap-[10px] gap-[5px]'>
                <section className='w-full h-[351px] md:h-auto md:w-1/2 flex flex-col xl:gap-[10px] gap-[5px] '>
                    {/* Wrapper для першої картинки */}
                    <Link href="/location"  className='relative h-1/2'>
                        <Image
                            src={items[1]}
                            alt="GA Home Design"
                            priority
                            fill
                            className='object-cover 2xl:object-[center_-170px] object-[center_center]'
                        />

                        {/* Оверлей */}
                        <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />

                        {/* Текст по центру */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                                {itemTitles[1]}
                            </p>
                        </div>
                    </Link>

                    {/* Wrapper для другої картинки */}
                    <Link href="/mortgage" className='relative h-1/2'>
                        <Image
                            src={items[2]}
                            alt="GA Home Design"
                            priority
                            fill
                            className='object-cover 2xl:object-[center_-170px] object-[center_center]'
                        />
                        {/* Оверлей */}
                        <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />

                        {/* Текст по центру */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                                {itemTitles[2]}
                            </p>
                        </div>
                    </Link>
                </section>

                {/* Wrapper для третьої картинки */}
                <Link href="/visualisation" className='relative w-full md:w-1/2 h-[173px] md:h-auto'>
                    <Image
                        src={items[3]}
                        alt="GA Home Design"
                        priority
                        fill
                        className='object-cover'
                    />
                    {/* Оверлей */}
                    <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />

                    {/* Текст по центру */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                            {itemTitles[3]}
                        </p>
                    </div>
                </Link>
            </section>
            <Link href="/savings" className='w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] h-[173px] relative'>
                <Image
                    src={items[4]}
                    alt="GA Home Design"
                    priority
                    fill
                    className='object-cover'
                />
                {/* Оверлей */}
                <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />

                {/* Текст по центру */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                        {itemTitles[4]}
                    </p>
                </div>
            </Link>

            <section className='w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] flex flex-col md:flex-row 2xl:gap-[15px] xl:gap-[10px] gap-[5px]'>
                <Link href="/owners" className='relative w-full md:w-1/2 h-[173px] md:h-auto'>
                    <Image
                        src={items[5]}
                        alt="GA Home Design"
                        priority
                        fill
                        className='object-cover object-[center_-33px]'
                    />
                    {/* Оверлей */}
                    <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />

                    {/* Текст по центру */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                            {itemTitles[5]}
                        </p>
                    </div>
                </Link>

                {/* Wrapper для третьої картинки */}
                <Link href="/innovations" className='relative w-full md:w-1/2 h-[173px] md:h-auto'>
                    <Image
                        src={items[6]}
                        alt="GA Home Design"
                        priority
                        fill
                        className='object-cover'
                    />
                    {/* Оверлей */}
                    <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />

                    {/* Текст по центру */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                            {itemTitles[6]}
                        </p>
                    </div>
                </Link>
            </section>


        </section>
    )
}
