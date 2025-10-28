import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Montserrat,
  Work_Sans,
  Archivo,
  Archivo_Black,
  Montagu_Slab,
  Lora,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SanityLive } from "@/lib/sanity/live-preview";
import { getHomePageSEOData } from "@/lib/sanity/fetching-functions/homepage";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black-400",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montaguSlab = Montagu_Slab({
  variable: "--font-montagu-slab",
  subsets: ["latin"],
  display: "swap",
});

const LoraFont = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const SEOData = await getHomePageSEOData();

  const JSON_LD_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEOData?.seo?.title || "Take a Leap",
    url: SEOData?.seo?.canonical || "https://takingleap.com",
    description: SEOData?.seo?.description || "",
    image: SEOData?.seo?.openGraph?.image?.asset?.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${
          SEOData?.seo?.canonical || "https://takingleap.com"
        }/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: SEOData?.seo?.title || "Take a Leap",
      logo: {
        "@type": "ImageObject",
        url: SEOData?.seo?.openGraph?.image?.asset?.url,
      },
    },
    keywords: SEOData?.seo?.keywords?.join(", "),
  };

  return (
    <html lang={"es"} suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-EPPTYFKS6Y');
          `}
        </Script>
        <link rel="icon" href="/assets/favicon.jpeg" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="canonical"
          href={SEOData?.seo?.canonical || "https://takingleap.com"}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://takingleap.com"
        />
        <meta name="author" content="Luciano Biancardi" />
        {SEOData?.seo?.noIndex && <meta name="robots" content="noindex" />}
        {SEOData?.seo?.noFollow && <meta name="robots" content="nofollow" />}
        {!SEOData?.seo?.noIndex && !SEOData?.seo?.noFollow && (
          <meta name="robots" content="index, follow" />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
      </head>
      <body
        className={`
          ${montserrat.variable} 
          ${workSans.variable} 
          ${archivo.variable} 
          ${archivoBlack.variable} 
          ${montaguSlab.variable} 
          ${LoraFont.variable} 
        `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-EPPTYFKS6Y"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="sr-only">
          <h1>{SEOData?.seo?.title || "Take a Leap"}</h1>
          <p>{SEOData?.seo?.description}</p>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SanityLive />
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

  const ogImageUrl = SEOData?.seo?.openGraph?.image?.asset?.url
    ? `${SEOData?.seo.openGraph.image.asset.url}?w=1200&h=630&fit=crop`
    : "https://takingleap.com/images/avatar/avatar.png";

  return {
    title: SEOData?.seo?.title || "Take a Leap",
    description: SEOData?.seo?.description || "",
    keywords: SEOData?.seo?.keywords?.join(", ") || "",
    openGraph: {
      title:
        SEOData?.seo?.openGraph?.title || SEOData?.seo?.title || "Take a Leap",
      description:
        SEOData?.seo?.openGraph?.description || SEOData?.seo?.description || "",
      url: SEOData?.seo?.canonical || "https://takingleap.com",
      siteName: SEOData?.seo?.title || "Take a Leap",
      images: [
        {
          url: ogImageUrl,
          width:
            SEOData?.seo?.openGraph?.image?.asset?.metadata?.dimensions
              ?.width || 1200,
          height:
            SEOData?.seo?.openGraph?.image?.asset?.metadata?.dimensions
              ?.height || 630,
          alt: SEOData?.seo?.openGraph?.image?.alt || "Take a Leap",
        },
      ],
      locale: "es",
      type: (SEOData?.seo?.openGraph?.type as "website") || "website",
    },
    twitter: {
      card:
        (SEOData?.seo?.twitter?.cardType as "summary_large_image") ||
        "summary_large_image",
      title:
        SEOData?.seo?.openGraph?.title || SEOData?.seo?.title || "Take a Leap",
      description:
        SEOData?.seo?.openGraph?.description || SEOData?.seo?.description || "",
      images: [ogImageUrl],
      creator: SEOData?.seo?.twitter?.creator || undefined,
      site: SEOData?.seo?.twitter?.site || undefined,
    },
    alternates: {
      canonical: SEOData?.seo?.canonical || "https://takingleap.com",
    },
    robots: {
      index: !SEOData?.seo?.noIndex,
      follow: !SEOData?.seo?.noFollow,
      googleBot: {
        index: !SEOData?.seo?.noIndex,
        follow: !SEOData?.seo?.noFollow,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
