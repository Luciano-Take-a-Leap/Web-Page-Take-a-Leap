import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { getFooterData } from "@/lib/sanity/fetching-functions/footer";
import { getHeaderData } from "@/lib/sanity/fetching-functions/header";
import {
  getCTAButtonRedirectionURL,
  getHomePageSections,
} from "@/lib/sanity/fetching-functions/homepage";
import { fetchWhatsAppConfig } from "@/lib/sanity/fetching-functions/whatsapp-config";
import HomePageComponent from "@/pages/homepage";

export default async function HomePage() {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  const pageData = await getHomePageSections();
  const CTARedirectionButton = await getCTAButtonRedirectionURL();
  const whatsappConfig = await fetchWhatsAppConfig();
  return (
    <>
      <div id="site-header">
        <Header data={headerData} />
      </div>
      <HomePageComponent
        sections={pageData?.sections || []}
        redirectionUrl={CTARedirectionButton.redirectionButtonUrl}
        whatsappConfig={whatsappConfig}
        countdownLimitDate={headerData?.countdownBanner?.limitDate}
      />
      <div id="site-footer">
        <Footer data={footerData} />
      </div>
    </>
  );
}
