import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO change url
  const baseUrl = 'https://jeg-dev.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
