import { HomePage } from '@/types/sanity.types';
import { sanityClient } from '../client';
import { homePageQuery, homePageSectionsQuery } from '../sanity-queries';

export async function getHomePageData(): Promise<HomePage | null> {
  try {
    return await sanityClient.fetch(homePageQuery);
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
}

export async function getHomePageSections() {
  try {
    return await sanityClient.fetch(homePageSectionsQuery);
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    return null;
  }
}

export async function getHomePageDataCached(): Promise<HomePage | null> {
  try {
    return await sanityClient.fetch(
      homePageQuery,
      {},
      { cache: 'force-cache', next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
}

export async function getHomePageSectionsCached() {
  try {
    return await sanityClient.fetch(homePageSectionsQuery);
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    return null;
  }
}
