import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO change url
  const baseUrl = 'https://jeg-dev.com';
  const locales = ['en', 'es'] as const;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
