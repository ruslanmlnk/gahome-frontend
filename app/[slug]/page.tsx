// app/[slug]/page.tsx
import { graphqlClient } from '@/src/lib/graphqlClient'
import { getSdk } from '@/src/gql'
import BlocksRenderer from '@/components/BlocksRenderer' // ⬅️ новий клієнтський компонент
import Image from 'next/image'
import GridContent from '@/components/GridContent'
import FIleDownload from '@/components/FileDownload'
import VideoGrid from '@/components/VideoGrid'
const sdk = getSdk(graphqlClient)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const res = await sdk.GetPageBySlug({ slug })
  const page = res?.Pages?.docs?.[0]
  return {
    title: page?.meta?.metaTitle ?? '',
    description: page?.meta?.metaDescription ?? '',
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const res = await sdk.GetPageBySlug({ slug })
  const page = res?.Pages?.docs?.[0]
  if (!page) return null



  return (
    <>
      {page?.main_title ? (
        <h1 className="mb-[24px] md:mb-[10px] lg:mb-[38px] xl:mb-[33px] 2xl:mb-[27px] font-medium text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px] md:leading-[38px] lg:leading-[40px] xl:leading-[55px] 2xl:leading-[70.5px] uppercase text-[#131313] text-center whitespace-pre-line container text-center mx-auto px-[16px] md:px-[60px] lg:px-[107px] xl:px-[123px] 2xl:px-[200px] pt-[22px] md:pt-[37px] lg:pt-[46px] xl:pt-[75px] 2xl:pt-[102px]">
          {String(page?.main_title).replace(/\\n/g, '\n')}
        </h1>) : ''}
      {page?.gridcont?.length ? (
        <GridContent items={
          page?.gridcont?.map((item) => ({
            title: item.title ?? '',
            description: item.description ?? '',
          })) ?? []
        } />
      ) : ''}
     
      <main>
        <BlocksRenderer content={Array.isArray(page.content) ? page.content : []} />
      </main>
       {page?.file_download?.file ? (
        <FIleDownload fileUrl={'https://admin.homegudzdesign.com'+page?.file_download.file?.url} text={page?.file_download.text || ''}/>
      ) : ''}

     {page?.videos && page.videos.length > 0 && (
        <VideoGrid
        className='2xl:max-w-[1920px] mx-auto mt-[42px] md:mt-[19px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[53px] 2xl:pb-[120px] xl:pb-[85px] md:pb-[55px] pb-[22px]'
          items={page.videos
            .map((v: any) => ({
              poster: "https://admin.homegudzdesign.com" + (v?.poster?.url ?? ""),
              href:`https://admin.homegudzdesign.com${v.video_file.url}`,
              title: v?.title ?? undefined,
            }))
            .filter((x) => x.poster && x.href)}
        />
      )}
      
      {page?.hero_image ? (<section className='w-full relative h-[173px] md:h-[360px] lg:h-[410px] xl:h-[480px] 2xl:h-[692px] mb-[23px]  md:mb-[45px] lg:mb-[55px]  mt-[32px] xl:mt-[47px] xl:mb-[85px] 2xl:mb-[120px] 2xl:mt-[62px] max-w-[1920px] mx-auto'>
        <Image
          src={'https://admin.homegudzdesign.com/' + page?.hero_image?.url || ''}
          alt="GA Home Design"
          priority
          fill
          className='object-cover'
        />
      </section>):''}
    </>
  )
}
