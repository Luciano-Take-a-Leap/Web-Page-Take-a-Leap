import { FAQSection } from '@studio/sanity.types';
import { faqSectionQuery } from '../sanity-queries';
import { sanityClient } from '../client';

export async function getFAQSectionData(): Promise<FAQSection | null> {
  try {
    return await sanityClient.fetch(faqSectionQuery);
  } catch (error) {
    console.error('Error fetching FAQ section data:', error);
    return null;
  }
}
