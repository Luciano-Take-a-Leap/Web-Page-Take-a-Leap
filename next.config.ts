import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
