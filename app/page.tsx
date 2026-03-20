export const dynamic = 'force-dynamic'

import GridSection from '@/components/GridSection'
import { graphqlClient } from '@/src/lib/graphqlClient'
import { pickMediaVariant, type MediaSizeVariant, type MediaWithSizes } from '@/src/lib/pickMediaVariant'
import { resolveMediaUrl } from '@/src/lib/resolveMediaUrl'

const GET_HOME_QUERY = /* GraphQL */ `
  query GetHomePage {
    Home {
      meta {
        metaTitle
        metaDescription
      }
      gridSection {
        item1 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item2 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item3 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item4 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item5 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item6 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item7 { title image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
        item8 { title href image { url alt mimeType width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } videoPoster { url alt width height sizes { thumbnail { url width height mimeType } card { url width height mimeType } tablet { url width height mimeType } desktop { url width height mimeType } } } } }
      }
    }
  }
`

type SizeMap = {
  thumbnail?: MediaSizeVariant | null
  card?: MediaSizeVariant | null
  tablet?: MediaSizeVariant | null
  desktop?: MediaSizeVariant | null
} | null

type PosterAsset = {
  url: string | null
  alt: string | null
  width?: number | null
  height?: number | null
  sizes?: SizeMap
} | null

type MediaAsset = {
  url: string | null
  alt: string | null
  mimeType: string | null
  width?: number | null
  height?: number | null
  sizes?: SizeMap
  videoPoster: PosterAsset
} | null

type GQLItem = {
  title: string | null
  href?: string | null
  image: MediaAsset
} | null | undefined

type HomeQueryResult = {
  Home: {
    meta: {
      metaTitle: string | null
      metaDescription: string | null
    } | null
    gridSection: {
      item1: GQLItem
      item2: GQLItem
      item3: GQLItem
      item4: GQLItem
      item5: GQLItem
      item6: GQLItem
      item7: GQLItem
      item8: GQLItem
    } | null
  } | null
}

type HomeData = NonNullable<HomeQueryResult['Home']>

const fetchHome = async (): Promise<HomeQueryResult['Home'] | null> => {
  const data = await graphqlClient
    .request<HomeQueryResult>(GET_HOME_QUERY)
    .catch(() => ({ Home: null }))

  return data.Home ?? null
}

const mapItem = (src: GQLItem) => {
  if (!src) return undefined

  const title = src.title ?? undefined
  const url = resolveMediaUrl(src.image?.url)
  const videoPoster = src.image?.videoPoster

  if (!url) {
    return { title }
  }

  return {
    title,
    image: {
      url,
      alt: src.image?.alt ?? '',
      mimeType: src.image?.mimeType ?? null,
      width: src.image?.width ?? null,
      height: src.image?.height ?? null,
      sizes: src.image?.sizes ?? null,
      videoPoster: resolveMediaUrl(videoPoster?.url)
        ? {
            url: resolveMediaUrl(videoPoster?.url),
            alt: videoPoster?.alt ?? '',
            width: videoPoster?.width ?? null,
            height: videoPoster?.height ?? null,
            sizes: videoPoster?.sizes ?? null,
          }
        : null,
    },
    href: src.href ?? undefined,
  }
}

const mapGridSection = (src: HomeData['gridSection']) => {
  if (!src) return undefined

  return {
    item1: mapItem(src.item1),
    item2: mapItem(src.item2),
    item3: mapItem(src.item3),
    item4: mapItem(src.item4),
    item5: mapItem(src.item5),
    item6: mapItem(src.item6),
    item7: mapItem(src.item7),
    item8: mapItem(src.item8),
  }
}

const pickPreviewImage = (home: HomeQueryResult['Home'] | null) => {
  const gridSection = home?.gridSection
  const assets = [
    gridSection?.item1?.image,
    gridSection?.item2?.image,
    gridSection?.item3?.image,
    gridSection?.item4?.image,
    gridSection?.item5?.image,
    gridSection?.item6?.image,
    gridSection?.item7?.image,
    gridSection?.item8?.image,
  ]

  for (const asset of assets) {
    if (!asset?.url) continue

    if (asset.mimeType?.startsWith('video/')) {
      const poster = pickMediaVariant(asset.videoPoster as MediaWithSizes, ['desktop', 'tablet', 'card'])
      if (poster?.url) return poster.url
      continue
    }

    const variant = pickMediaVariant(asset as MediaWithSizes, ['desktop', 'tablet', 'card'])
    if (variant?.url) return variant.url
  }

  return '/images/grid/1.png'
}

export async function generateMetadata() {
  try {
    const home = await fetchHome()

    return {
      title: home?.meta?.metaTitle ?? 'Home',
      description: home?.meta?.metaDescription ?? '',
      openGraph: {
        title: home?.meta?.metaTitle ?? 'Home',
        description: home?.meta?.metaDescription ?? '',
        images: [
          {
            url: pickPreviewImage(home),
          },
        ],
      },
    }
  } catch {
    return {
      title: 'Home',
      description: '',
      openGraph: {
        title: 'Home',
        description: '',
        images: [{ url: '/images/grid/1.png' }],
      },
    }
  }
}

export default async function Page() {
  const home = await fetchHome()
  const gridSection = mapGridSection(home?.gridSection ?? null)

  return <GridSection gridSection={gridSection} />
}
