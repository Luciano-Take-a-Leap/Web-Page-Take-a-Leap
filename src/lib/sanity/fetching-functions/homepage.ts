import { sanityClient } from '../client';
import { homePageCTAButtonRedirectionURLQuery, homePageSectionsQuery, homePageSEOQuery } from '../sanity-queries';

export async function getHomePageSections() {
  try {
    return await sanityClient.fetch(homePageSectionsQuery);
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    return null;
  }
}


export async function getHomePageSEOData() {
   try {
    return await sanityClient.fetch(homePageSEOQuery);
  } catch (error) {
    console.error('Error fetching homepage SEO Data:', error);
    return null;
  }
}

export async function getCTAButtonRedirectionURL() {
   try {
    return await sanityClient.fetch(homePageCTAButtonRedirectionURLQuery);
  } catch (error) {
    console.error('Error fetching CTA button redirection URL', error);
    return null;
  }
}

