import { NextConfig } from 'next';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://player.vimeo.com https://f.vimeocdn.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://cdn.sanity.io https://i.vimeocdn.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://studio.takingleap.com https://*.sanity.io https://*.sanity.network https://player.vimeo.com https://fresnel.vimeocdn.com;
  frame-src 'self' https://player.vimeo.com;
  media-src 'self' https://vod-progressive.akamaized.net https://player.vimeo.com blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  compress: true,
};

export default nextConfig;