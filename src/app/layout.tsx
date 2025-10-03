import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import {
  Montserrat,
  Work_Sans,
  Archivo,
  Archivo_Black,
  Montagu_Slab,
  Lora,
} from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/layout/header';
import { getHeaderData } from '@/lib/sanity/fetching-functions/header';
import { SanityLive } from '@/lib/sanity/live-preview';
import { getHomePageSEOData } from '@/lib/sanity/fetching-functions/homepage';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
});

const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black-400',
  subsets: ['latin'],
  weight: '400',
});

const montaguSlab = Montagu_Slab({
  variable: '--font-montagu-slab',
  subsets: ['latin'],
});

const LoraFont = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: '400',
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const headerData = await getHeaderData();
  const SEOData = await getHomePageSEOData();

  const JSON_LD_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEOData?.title || 'Take a Leap',
    url: SEOData?.canonical || 'https://takingleap.com',
    description: SEOData?.description || '',
    image: SEOData?.openGraph?.image?.asset?.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEOData?.canonical || 'https://takingleap.com'}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SEOData?.title || 'Take a Leap',
      logo: {
        '@type': 'ImageObject',
        url: SEOData?.openGraph?.image?.asset?.url,
      },
    },
    keywords: SEOData?.keywords?.join(', '),
  };

  return (
    <html lang={'es'} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/favicon.jpeg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={SEOData?.canonical || 'https://takingleap.com'} />
        <link rel="alternate" hrefLang="x-default" href="https://takingleap.com" />
        <meta name="author" content="Luciano Biancardi" />
        {SEOData?.noIndex && <meta name="robots" content="noindex" />}
        {SEOData?.noFollow && <meta name="robots" content="nofollow" />}
        {!SEOData?.noIndex && !SEOData?.noFollow && (
          <meta name="robots" content="index, follow" />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased ${workSans.variable} ${archivoBlack.variable} ${montaguSlab.variable} ${LoraFont.variable} ${archivo.variable} suppressHydrationWarning`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SanityLive />
          <Header data={headerData} />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const SEOData = await getHomePageSEOData();

  const ogImageUrl = SEOData?.openGraph?.image?.asset?.url 
    ? `${SEOData.openGraph.image.asset.url}?w=1200&h=630&fit=crop`
    : 'https://takingleap.com/images/avatar/avatar.png';

  return {
    title: SEOData?.title || 'Take a Leap',
    description: SEOData?.description || '',
    keywords: SEOData?.keywords?.join(', ') || '',
    openGraph: {
      title: SEOData?.openGraph?.title || SEOData?.title || 'Take a Leap',
      description: SEOData?.openGraph?.description || SEOData?.description || '',
      url: SEOData?.canonical || 'https://takingleap.com',
      siteName: SEOData?.title || 'Take a Leap',
      images: [
        {
          url: ogImageUrl,
          width: SEOData?.openGraph?.image?.asset?.metadata?.dimensions?.width || 1200,
          height: SEOData?.openGraph?.image?.asset?.metadata?.dimensions?.height || 630,
          alt: SEOData?.openGraph?.image?.alt || 'Take a Leap',
        },
      ],
      locale: 'es',
      type: (SEOData?.openGraph?.type as 'website') || 'website',
    },
    twitter: {
      card: (SEOData?.twitter?.cardType as 'summary_large_image') || 'summary_large_image',
      title: SEOData?.openGraph?.title || SEOData?.title || 'Take a Leap',
      description: SEOData?.openGraph?.description || SEOData?.description || '',
      images: [ogImageUrl],
      creator: SEOData?.twitter?.creator || undefined,
      site: SEOData?.twitter?.site || undefined,
    },
    alternates: {
      canonical: SEOData?.canonical || 'https://takingleap.com',
    },
    robots: {
      index: !SEOData?.noIndex,
      follow: !SEOData?.noFollow,
      googleBot: {
        index: !SEOData?.noIndex,
        follow: !SEOData?.noFollow,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}