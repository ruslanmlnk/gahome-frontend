import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    unoptimized: true,
    domains: ['admin.homegudzdesign.com'],
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
  },
}

export default nextConfig
