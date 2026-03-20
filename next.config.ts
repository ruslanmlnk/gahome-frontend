import type { NextConfig } from 'next'

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  serverExternalPackages: ['nodemailer'],
  images: {
    dangerouslyAllowLocalIP: true,
    domains: ['admin.homegudzdesign.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.homegudzdesign.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  } as NonNullable<NextConfig['images']> & { dangerouslyAllowLocalIP: boolean },
} satisfies NextConfig

export default nextConfig
