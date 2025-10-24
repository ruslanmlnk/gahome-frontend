import Image from 'next/image'
import type { JSX } from 'react'



export default function GridSection(): JSX.Element {
    return (
        <section className='w-full 2xl:max-w-[1920px] xl:max-w-[1440px] lg:max-w-[1024px] mx-auto 2xl:pt-[15px] 2xl:pb-[120px] xl:pb-[85px] xl:pt-[10px] pt-[5px] lg:pb-[55px] grid gap-[5px] xl:gap-[10px] 2xl:gap-[15px]'>
            <section className='w-full 2xl:h-[692px] xl:h-[480px] lg:h-[410px] md:h-[360px] relative'>
                <Image
                    src="/images/grid/1.png"
                    alt="GA Home Design"
                    priority
                    fill
                    className='object-cover'
                />
            </section>
            <section className='w-full 2xl:h-[692px] xl:h-[480px] lg:h-[410px] md:h-[360px] flex 2xl:gap-[15px] xl:gap-[10px] gap-[5px]'>
                <section className='w-1/2 flex flex-col gap-[10px] gap-[5px]'>
                    {/* Wrapper для першої картинки */}
                    <div className='relative h-1/2'>
                        <Image
                            src="/images/grid/2.png"
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
                               BEST LOCATION
                            </p>
                        </div>
                    </div>

                    {/* Wrapper для другої картинки */}
                    <div className='relative h-1/2'>
                        <Image
                            src="/images/grid/3.png"
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
                                Mortgage Programs
                            </p>
                        </div>
                    </div>
                </section>

                {/* Wrapper для третьої картинки */}
                <div className='relative w-1/2'>
                    <Image
                        src="/images/grid/4.png"
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
                            3D visualisatioN
                        </p>
                    </div>
                </div>
            </section>
            <section className='w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] relative'>
                <Image
                    src="/images/grid/5.png"
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
                        double savings
                    </p>
                </div>
            </section>

            <section className='w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] flex 2xl:gap-[15px] xl:gap-[10px] gap-[5px]'>
                <section className='relative w-1/2'>
                    <Image
                        src="/images/grid/6.jpg"
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
                            happy owners
                        </p>
                    </div>
                </section>

                {/* Wrapper для третьої картинки */}
                <div className='relative w-1/2'>
                    <Image
                        src="/images/grid/7.jpg"
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
                            innovations
                        </p>
                    </div>
                </div>
            </section>


        </section>
    )
}
