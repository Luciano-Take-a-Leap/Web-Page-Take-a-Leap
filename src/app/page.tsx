import { getCTAButtonRedirectionURL, getHomePageSections, getHomePageSEOData } from '@/lib/sanity/fetching-functions/homepage';
import { fetchWhatsAppConfig } from '@/lib/sanity/fetching-functions/whatsapp-config';
import HomePageComponent from '@/pages/homepage';

export default async function HomePage() {
  const pageData = await getHomePageSections();
  const CTARedirectionButton = await getCTAButtonRedirectionURL();
  const whatsappConfig = await fetchWhatsAppConfig();
  const SEOData = await getHomePageSEOData();

  return <>
        <div className="sr-only">
        <h1>{SEOData?.title || 'Take a Leap'}</h1>
        <p>{SEOData?.description}</p>
      </div>
    <HomePageComponent sections={pageData?.sections || []} redirectionUrl={CTARedirectionButton.redirectionButtonUrl} whatsappConfig={whatsappConfig} />;
  </>
}