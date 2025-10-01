import { getHomePageSectionsCached } from '@/lib/sanity/fetching-functions/homepage';
import HomePageComponent from '@/pages/homepage';

export default async function HomePage() {
  const pageData = await getHomePageSectionsCached();
  
  return <HomePageComponent sections={pageData?.sections || []} />;
}