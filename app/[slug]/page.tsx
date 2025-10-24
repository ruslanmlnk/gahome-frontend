// app/[slug]/page.tsx
import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'
import BlocksRenderer from '@/components/BlocksRenderer' // ⬅️ новий клієнтський компонент

const sdk = getSdk(graphqlClient)

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = (await params) as { slug: string }
  const res = await sdk.GetPageBySlug({ slug })
  const page = res?.Pages?.docs?.[0]
  return {
    title: page?.meta?.metaTitle ?? '',
    description: page?.meta?.metaDescription ?? '',
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = (await params) as { slug: string }
  const res = await sdk.GetPageBySlug({ slug })
  const page = res?.Pages?.docs?.[0]
  if (!page) return null

  return (
    <main className="container text-center mx-auto xl:px-[134px] 2xl:px-[200px] xl:py-[75px] 2xl:py-[102px] flex flex-col gap-[27px] xl:max-w-[1440px] 2xl:max-w-[1920px]">
      <BlocksRenderer content={Array.isArray(page.content) ? page.content : []} />
    </main>
  )
}
