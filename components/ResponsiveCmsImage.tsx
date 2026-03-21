'use client'

import Image, { type ImageProps } from 'next/image'

import { payloadResponsiveImageLoader } from '@/src/lib/payloadResponsiveImage'
import { shouldUnoptimizeImage } from '@/src/lib/shouldUnoptimizeImage'

type ResponsiveCmsImageProps = Omit<ImageProps, 'loader' | 'src' | 'unoptimized'> & {
  src: string
  responsiveSrc?: string | null
}

export default function ResponsiveCmsImage({
  src,
  responsiveSrc,
  ...props
}: ResponsiveCmsImageProps) {
  return (
    <Image
      {...props}
      src={responsiveSrc ?? src}
      loader={responsiveSrc ? payloadResponsiveImageLoader : undefined}
      unoptimized={responsiveSrc ? false : shouldUnoptimizeImage(src)}
    />
  )
}
