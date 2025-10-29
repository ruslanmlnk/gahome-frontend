export const dynamic = 'force-dynamic' 

import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'
import GridSection from '@/components/GridSection'

const sdk = getSdk(graphqlClient)

// helper-и для мапінгу GraphQL -> проп GridSection
type GQLItem = {
  title: string | null
  image: { url: string | null; alt: string | null } | null
} | null | undefined

const mapItem = (src: GQLItem) => {
  if (!src) return undefined
  const title = src.title ?? undefined
  const url = src.image?.url ?? undefined
  if (url) {
    return {
      title,
      image: {
        url,
        alt: src.image?.alt ?? '', // alt очікується як string
      },
    }
  }
  // без картинки
  return { title }
}

const mapGridSection = (src: any /* GraphQL Home.gridSection */) => {
  if (!src) return undefined
  return {
    item1: mapItem(src.item1),
    item2: mapItem(src.item2),
    item3: mapItem(src.item3),
    item4: mapItem(src.item4),
    item5: mapItem(src.item5),
    item6: mapItem(src.item6),
    item7: mapItem(src.item7),
  }
}

export async function generateMetadata() {
  try {
    const { Home } = await sdk.GetHome()

    const title = Home?.meta?.metaTitle ?? 'Home'
    const description = Home?.meta?.metaDescription ?? ''

    // Pick the first available image from gridSection, fallback to public image
    const gs = Home?.gridSection as any
    const firstImageUrl =
      gs?.item1?.image?.url ||
      gs?.item2?.image?.url ||
      gs?.item3?.image?.url ||
      gs?.item4?.image?.url ||
      gs?.item5?.image?.url ||
      gs?.item6?.image?.url ||
      gs?.item7?.image?.url ||
      '/images/grid/1.png'

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: firstImageUrl,
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
  const { Home } = await sdk.GetHome().catch(() => ({ Home: null }))
  console.log(Home);
  const gridSection = mapGridSection(Home?.gridSection)

  return (
    <>
      <GridSection gridSection={gridSection} />
    </>
  )
}
