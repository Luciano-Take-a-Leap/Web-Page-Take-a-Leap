import { getHeaderData } from '@/lib/sanity/fetching-functions/header';
import { getCTAButtonRedirectionURL, getHomePageSections } from '@/lib/sanity/fetching-functions/homepage';
import { fetchWhatsAppConfig } from '@/lib/sanity/fetching-functions/whatsapp-config';
import HomePageComponent from '@/pages/homepage';

export default async function HomePage() {
  const headerData = await getHeaderData();
  const pageData = await getHomePageSections();
  const CTARedirectionButton = await getCTAButtonRedirectionURL();
  const whatsappConfig = await fetchWhatsAppConfig();

  return <>
    <HomePageComponent sections={pageData?.sections || []} redirectionUrl={CTARedirectionButton.redirectionButtonUrl} whatsappConfig={whatsappConfig} countdownLimitDate={headerData?.countdownBanner?.limitDate} />;
  </>
}