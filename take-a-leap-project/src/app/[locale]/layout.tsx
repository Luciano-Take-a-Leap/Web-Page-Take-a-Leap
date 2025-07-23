import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Montserrat, Work_Sans, Archivo_Black } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';
import Header from '@/components/layout/header';
// import Footer from '@/components/layout/footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black-400',
  subsets: ['latin'],
  weight: '400',
});

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // const JSON_LD_SCHEMA = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Person',
  //   name: 'Take a Leap',
  //   url: 'https://takingleap.com',
  //   image: 'https://takingleap.com/images/image.png',
  //   sameAs: [
  //     //TODO add social media links here,
  //   ],
  //   jobTitle: 'Software Engineer',
  //   worksFor: {
  //     '@type': 'Organization',
  //     name: 'Freelance / Employed / Remote Work / Full-time',
  //   },
  //   description:
  //     'Ezequiel Grigolatto is a software engineer with a passion for building modern web applications and creating engaging digital experiences.',
  //   knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Frontend Development'],
  //   mainEntityOfPage: {
  //     '@type': 'WebPage',
  //     '@id': 'https://takingleap.com',
  //   },
  // };

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={`https://takingleap.com`} />
        <link rel="alternate" hrefLang="x-default" href="https://takingleap.com" />
        <link rel="alternate" hrefLang="en" href="https://takingleap.com/en" />
        <meta name="keywords" content={t('keywords')} />
        <meta name="author" content="Ezequiel Grigolatto" />
        <meta name="robots" content="index, follow" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        /> */}
      </head>
      <body
        className={`${montserrat.variable} antialiased ${workSans.variable} ${archivoBlack.variable} 
       suppressHydrationWarning 
        }`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Header />
            {children}
            {/* <Footer /> */}
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const locales = ['en', 'es'] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://takingleap.com`,
      siteName: 'Next.js i18n Template',
      images: [
        {
          url: 'https://takingleap.com/images/avatar/avatar.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://takingleap.com/images/avatar/avatar.png'],
    },
    alternates: {
      canonical: `https://takingleap.com`,
      languages: {
        en: 'https://takingleap.com/en',
        es: 'https://takingleap.com/es',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
