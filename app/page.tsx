export const dynamic = 'force-dynamic'

import GridSection from '@/components/GridSection'
import { graphqlClient } from '@/src/lib/graphqlClient'

const GET_HOME_QUERY = /* GraphQL */ `
  query GetHomePage {
    Home {
      meta {
        metaTitle
        metaDescription
      }
      gridSection {
        item1 { title image { url alt mimeType videoPoster { url alt } } }
        item2 { title image { url alt mimeType videoPoster { url alt } } }
        item3 { title image { url alt mimeType videoPoster { url alt } } }
        item4 { title image { url alt mimeType videoPoster { url alt } } }
        item5 { title image { url alt mimeType videoPoster { url alt } } }
        item6 { title image { url alt mimeType videoPoster { url alt } } }
        item7 { title image { url alt mimeType videoPoster { url alt } } }
        item8 { title href image { url alt mimeType videoPoster { url alt } } }
      }
    }
  }
`

type PosterAsset = {
  url: string | null
  alt: string | null
} | null

type MediaAsset = {
  url: string | null
  alt: string | null
  mimeType: string | null
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
  const url = src.image?.url ?? undefined

  if (!url) {
    return { title }
  }

  return {
    title,
    image: {
      url,
      alt: src.image?.alt ?? '',
      mimeType: src.image?.mimeType ?? null,
      videoPoster: src.image?.videoPoster?.url
        ? {
            url: src.image.videoPoster.url,
            alt: src.image.videoPoster.alt ?? '',
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
      if (asset.videoPoster?.url) return asset.videoPoster.url
      continue
    }

    return asset.url
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
