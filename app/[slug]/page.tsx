import BlocksRenderer from '@/components/BlocksRenderer'
import FIleDownload from '@/components/FileDownload'
import GridContent from '@/components/GridContent'
import ResponsiveCmsImage from '@/components/ResponsiveCmsImage'
import VideoGrid from '@/components/VideoGrid'
import { graphqlClient } from '@/src/lib/graphqlClient'
import { pickMediaVariant, type MediaSizeVariant, type MediaWithSizes } from '@/src/lib/pickMediaVariant'
import { buildPayloadResponsiveSrc } from '@/src/lib/payloadResponsiveImage'
import { resolveMediaUrl } from '@/src/lib/resolveMediaUrl'
import { notFound } from 'next/navigation'

const GET_PAGE_QUERY = /* GraphQL */ `
  query GetPageBySlugPage($slug: String!) {
    Pages(where: { slug: { equals: $slug } }) {
      docs {
        id
        slug
        main_title
        hero_image {
          url
          width
          height
          sizes {
            thumbnail { url width height mimeType }
            card { url width height mimeType }
            tablet { url width height mimeType }
            desktop { url width height mimeType }
          }
        }
        videos {
          video_file {
            url
          }
          poster {
            url
            width
            height
            alt
            sizes {
              thumbnail { url width height mimeType }
              card { url width height mimeType }
              tablet { url width height mimeType }
              desktop { url width height mimeType }
            }
          }
        }
        gridcont {
          title
          description
        }
        file_download {
          text
          file {
            url
          }
        }
        meta {
          metaTitle
          metaDescription
        }
        content {
          __typename
          ... on Title {
            title
          }
          ... on Paragraph {
            paragraph
            strong
          }
          ... on ImageGallery {
            items {
              image {
                url
                alt
                width
                height
                sizes {
                  thumbnail { url width height mimeType }
                  card { url width height mimeType }
                  tablet { url width height mimeType }
                  desktop { url width height mimeType }
                }
              }
            }
          }
          ... on Renders {
            items {
              mainImage {
                url
                alt
                width
                height
                sizes {
                  thumbnail { url width height mimeType }
                  card { url width height mimeType }
                  tablet { url width height mimeType }
                  desktop { url width height mimeType }
                }
              }
              gallery {
                image {
                  url
                  alt
                  width
                  height
                  sizes {
                    thumbnail { url width height mimeType }
                    card { url width height mimeType }
                    tablet { url width height mimeType }
                    desktop { url width height mimeType }
                  }
                }
              }
            }
          }
          ... on ReadMore {
            label
          }
          ... on Disclaimer {
            text
          }
        }
      }
    }
  }
`

type PageQueryResult = {
  Pages: {
    docs: Array<{
      id: number | string
      slug: string | null
      main_title: string | null
      hero_image: {
        url: string | null
        width: number | null
        height: number | null
        sizes?: {
          thumbnail?: MediaSizeVariant | null
          card?: MediaSizeVariant | null
          tablet?: MediaSizeVariant | null
          desktop?: MediaSizeVariant | null
        } | null
      } | null
      videos:
        | Array<{
            video_file: {
              url: string | null
            } | null
            poster: {
              url: string | null
              width: number | null
              height: number | null
              alt: string | null
              sizes?: {
                thumbnail?: MediaSizeVariant | null
                card?: MediaSizeVariant | null
                tablet?: MediaSizeVariant | null
                desktop?: MediaSizeVariant | null
              } | null
            } | null
          }>
        | null
      gridcont:
        | Array<{
            title: string | null
            description: string | null
          }>
        | null
      file_download: {
        text: string | null
        file: {
          url: string | null
        } | null
      } | null
      meta: {
        metaTitle: string | null
        metaDescription: string | null
      } | null
      content: Array<Record<string, unknown>> | null
    }>
  } | null
}

const fetchPage = async (slug: string) => {
  const result = await graphqlClient
    .request<PageQueryResult>(GET_PAGE_QUERY, { slug })
    .catch(() => ({ Pages: null }))

  return result.Pages?.docs?.[0] ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await fetchPage(slug)

  if (!page) return {}

  const title = page.meta?.metaTitle ?? ''
  const description = page.meta?.metaDescription ?? ''
  const ogImage = pickMediaVariant(page.hero_image as MediaWithSizes, ['desktop', 'tablet', 'card'])?.url || '/images/grid/1.png'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await fetchPage(slug)

  if (!page) return notFound()

  return (
    <>
      {page.main_title ? (
        <h1 className="mb-[24px] md:mb-[10px] lg:mb-[38px] xl:mb-[33px] 2xl:mb-[27px] font-medium text-[24px] md:text-[26px] lg:text-[30px] xl:text-[42px] 2xl:text-[48px] md:leading-[38px] lg:leading-[40px] xl:leading-[55px] 2xl:leading-[70.5px] uppercase text-[#131313] text-center whitespace-pre-line container text-center mx-auto px-[16px] md:px-[60px] lg:px-[107px] xl:px-[123px] 2xl:px-[200px] pt-[22px] md:pt-[37px] lg:pt-[46px] xl:pt-[75px] 2xl:pt-[102px]">
          {String(page.main_title).replace(/\\n/g, '\n')}
        </h1>
      ) : (
        ''
      )}
      {page.gridcont?.length ? (
        <GridContent
          items={
            page.gridcont.map((item) => ({
              title: item.title ?? '',
              description: item.description ?? '',
            })) ?? []
          }
        />
      ) : (
        ''
      )}

      <main>
        <BlocksRenderer content={Array.isArray(page.content) ? page.content : []} />
      </main>
      {page.file_download?.file ? (
        <FIleDownload
          fileUrl={resolveMediaUrl(page.file_download.file?.url)}
          text={page.file_download.text || ''}
        />
      ) : (
        ''
      )}

      {page.videos && page.videos.length > 0 && (
        <VideoGrid
          className="2xl:max-w-[1920px] mx-auto mt-[42px] md:mt-[19px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[53px] 2xl:pb-[120px] xl:pb-[85px] md:pb-[55px] pb-[22px]"
          items={page.videos
            .map((v) => ({
              poster: v?.poster as MediaWithSizes,
              href: resolveMediaUrl(v?.video_file?.url),
              title: undefined,
            }))
            .filter((x) => x.poster && x.href)}
        />
      )}

      {page.hero_image ? (
        <section className="w-full relative h-[173px] md:h-[360px] lg:h-[410px] xl:h-[480px] 2xl:h-[692px] mb-[23px]  md:mb-[45px] lg:mb-[55px]  mt-[32px] xl:mt-[47px] xl:mb-[85px] 2xl:mb-[120px] 2xl:mt-[62px] max-w-[1920px] mx-auto">
          {(() => {
            const heroVariant = pickMediaVariant(page.hero_image as MediaWithSizes, ['desktop', 'tablet', 'card'])
            const heroSrc = buildPayloadResponsiveSrc(page.hero_image as MediaWithSizes, ['card', 'tablet', 'desktop'])

            if (!heroVariant) return null

            return (
              <ResponsiveCmsImage
                src={heroVariant.url}
                responsiveSrc={heroSrc}
                alt="GA Home Design"
                priority
                fill
                sizes="100vw"
                className="object-cover"
              />
            )
          })()}
        </section>
      ) : (
        ''
      )}
    </>
  )
}
