import type { Route } from 'next'
import Link from 'next/link'
import HomeGridMedia, { type HomeGridMediaAsset as MediaAsset } from '@/components/HomeGridMedia'

type Item = {
  title?: string
  href?: string
  image?: MediaAsset | null
}

type Props = {
  gridSection?: {
    item1?: Item
    item2?: Item
    item3?: Item
    item4?: Item
    item5?: Item
    item6?: Item
    item7?: Item
    item8?: Item
  }
}

function getAssetAspectRatio(asset?: MediaAsset | null): number {
  const source =
    asset?.mimeType?.startsWith('video/')
      ? (asset.videoPoster ?? asset)
      : asset

  const width = Number(source?.width)
  const height = Number(source?.height)

  if (!width || !height) return 16 / 9

  return width / height
}

const defaultAssets: MediaAsset[] = [
  { url: '/images/grid/1.png', alt: 'Best location' },
  { url: '/images/grid/2.png', alt: 'Best location' },
  { url: '/images/grid/3.png', alt: 'Mortgage programs' },
  { url: '/images/grid/4.png', alt: '3D visualisation' },
  { url: '/images/grid/5.png', alt: 'Double savings' },
  { url: '/images/grid/6.jpg', alt: 'Happy owners' },
  { url: '/images/grid/7.jpg', alt: 'Innovations' },
  { url: '/images/grid/5.png', alt: 'New block' },
]

export default function GridSection({ gridSection }: Props) {
  const items = [
    gridSection?.item1?.image ?? defaultAssets[0],
    gridSection?.item2?.image ?? defaultAssets[1],
    gridSection?.item3?.image ?? defaultAssets[2],
    gridSection?.item4?.image ?? defaultAssets[3],
    gridSection?.item5?.image ?? defaultAssets[4],
    gridSection?.item6?.image ?? defaultAssets[5],
    gridSection?.item7?.image ?? defaultAssets[6],
    gridSection?.item8?.image ?? defaultAssets[7],
  ]

  const itemTitles = [
    gridSection?.item1?.title || 'LOCATION',
    gridSection?.item2?.title || 'LOCATION',
    gridSection?.item3?.title || 'Mortgage Programs',
    gridSection?.item4?.title || '3D visualisatioN',
    gridSection?.item5?.title || 'double savings',
    gridSection?.item6?.title || 'happy owners',
    gridSection?.item7?.title || 'innovations',
    gridSection?.item8?.title || 'new block',
  ]

  const item8Href = gridSection?.item8?.href
  const mediaClassName = 'object-cover object-center w-full h-full'
  const firstBlockAspectRatio = getAssetAspectRatio(items[0])

  return (
    <section className="w-full 2xl:max-w-[1920px] mx-auto 2xl:pt-[15px] 2xl:pb-[120px] xl:pb-[85px] xl:pt-[10px] md:pt-[5px] pt-[32px] md:pb-[55px] pb-[55px] grid gap-[5px] xl:gap-[10px] 2xl:gap-[15px]">
      <section
        className="relative w-full overflow-hidden bg-transparent"
        style={{ aspectRatio: firstBlockAspectRatio }}
      >
        <Link href="/dream" className="relative block w-full h-full">
          <HomeGridMedia
            asset={items[0]}
            title={itemTitles[0]}
            priority
            sizes="100vw"
            preferredSizes={['desktop', 'tablet', 'card']}
            className={mediaClassName}
          />
        </Link>
      </section>
      <section className="flex-col md:flex-row w-full 2xl:h-[692px] xl:h-[480px] lg:h-[410px] md:h-[360px] flex 2xl:gap-[15px] xl:gap-[10px] gap-[5px]">
        <section className="w-full h-[351px] md:h-auto md:w-1/2 flex flex-col xl:gap-[10px] gap-[5px] ">
          <Link href="/location" className="relative h-1/2">
            <HomeGridMedia
              asset={items[1]}
              title={itemTitles[1]}
              sizes="(max-width: 767px) 100vw, 50vw"
              preferredSizes={['tablet', 'card', 'desktop']}
              className={mediaClassName}
            />
            <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                {itemTitles[1]}
              </p>
            </div>
          </Link>

          <Link href="/mortgage" className="relative h-1/2">
            <HomeGridMedia
              asset={items[2]}
              title={itemTitles[2]}
              sizes="(max-width: 767px) 100vw, 50vw"
              preferredSizes={['tablet', 'card', 'desktop']}
              className={mediaClassName}
            />
            <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
                {itemTitles[2]}
              </p>
            </div>
          </Link>
        </section>

        <Link href="/visualisation" className="relative w-full md:w-1/2 h-[173px] md:h-auto">
          <HomeGridMedia
            asset={items[3]}
            title={itemTitles[3]}
            sizes="(max-width: 767px) 100vw, 50vw"
            preferredSizes={['tablet', 'card', 'desktop']}
            className={mediaClassName}
          />
          <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
              {itemTitles[3]}
            </p>
          </div>
        </Link>
      </section>
      <Link href="/savings" className="w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] h-[173px] relative">
        <HomeGridMedia
          asset={items[4]}
          title={itemTitles[4]}
          sizes="100vw"
          preferredSizes={['desktop', 'tablet', 'card']}
          className={mediaClassName}
        />
        <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
            {itemTitles[4]}
          </p>
        </div>
      </Link>

      <section className="w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] flex flex-col md:flex-row 2xl:gap-[15px] xl:gap-[10px] gap-[5px]">
        <Link href="/owners" className="relative w-full md:w-1/2 h-[173px] md:h-auto">
          <HomeGridMedia
            asset={items[5]}
            title={itemTitles[5]}
            sizes="(max-width: 767px) 100vw, 50vw"
            preferredSizes={['tablet', 'card', 'desktop']}
            className={mediaClassName}
          />
          <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
              {itemTitles[5]}
            </p>
          </div>
        </Link>

        <Link href="/innovations" className="relative w-full md:w-1/2 h-[173px] md:h-auto">
          <HomeGridMedia
            asset={items[6]}
            title={itemTitles[6]}
            sizes="(max-width: 767px) 100vw, 50vw"
            preferredSizes={['tablet', 'card', 'desktop']}
            className={mediaClassName}
          />
          <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
              {itemTitles[6]}
            </p>
          </div>
        </Link>
      </section>
      {item8Href ? (
        <Link
          href={item8Href as Route}
          className="w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] h-[173px] relative"
        >
          <HomeGridMedia
            asset={items[7]}
            title={itemTitles[7]}
            sizes="100vw"
            preferredSizes={['desktop', 'tablet', 'card']}
            className={mediaClassName}
          />
          <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
              {itemTitles[7]}
            </p>
          </div>
        </Link>
      ) : (
        <section className="w-full 2xl:h-[341px] xl:h-[235px] lg:h-[202.5px] md:h-[177.5px] h-[173px] relative">
          <HomeGridMedia
            asset={items[7]}
            title={itemTitles[7]}
            sizes="100vw"
            preferredSizes={['desktop', 'tablet', 'card']}
            className={mediaClassName}
          />
          <div className="absolute inset-0 bg-[rgba(19,19,19,0.1)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="uppercase text-white text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px]">
              {itemTitles[7]}
            </p>
          </div>
        </section>
      )}
    </section>
  )
}
