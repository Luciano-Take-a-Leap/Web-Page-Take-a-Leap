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
// import Footer from '@/components/layout/footer';

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

  return (
    <html lang={'es'} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href={`https://takingleap.com`} />
        <link rel="alternate" hrefLang="x-default" href="https://takingleap.com" />
        <link rel="alternate" hrefLang="en" href="https://takingleap.com/en" />
        <meta name="author" content="Ezequiel Grigolatto" />
        <meta name="robots" content="index, follow" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        /> */}
      </head>
      <body
        className={`${montserrat.variable} antialiased ${workSans.variable} ${archivoBlack.variable} ${montaguSlab.variable} ${LoraFont.variable} ${archivo.variable}
       suppressHydrationWarning 
        }`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const keywords = '';

  return {
    title: 'Take a Leap',
    description: '',
    keywords: keywords,
    openGraph: {
      title: 'Take a Leap',
      description: '',
      url: `https://takingleap.com`,
      siteName: 'Next.js i18n Template',
      images: [
        {
          url: 'https://takingleap.com/images/avatar/avatar.png',
          width: 1200,
          height: 630,
          alt: 'Take a Leap',
        },
      ],
      locale: 'es',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'take a leap',
      description: '',
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
