import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'
import GridSection from '@/components/GridSection'
import ContactForm from '@/components/ContactForm'

const sdk = getSdk(graphqlClient)

export async function generateMetadata() {
  try {
    const { Home } = await sdk.GetHome()
    return {
      title: Home?.meta?.metaTitle ?? 'Home',
      description: Home?.meta?.metaDescription ?? '',
    }
  } catch {
    return {
      title: 'Home',
      description: '',
    }
  }
}

export default async function Page() {
  const { Home } = await sdk.GetHome().catch(() => ({ Home: null }))

  return (
    <>
      <GridSection/>
    </>
  )
}

