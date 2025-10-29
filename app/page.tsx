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
    return {
      title: Home?.meta?.metaTitle ?? 'Home',
      description: Home?.meta?.metaDescription ?? '',
    }
  } catch {
    return { title: 'Home', description: '' }
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