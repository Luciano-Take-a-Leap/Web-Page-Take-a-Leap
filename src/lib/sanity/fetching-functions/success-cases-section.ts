import { SuccessCaseSection } from '@/types/sanity.types';
import { sanityClient } from '../client';
import { successCaseSectionQuery } from '../sanity-queries';

export async function getSuccessCaseSectionData(): Promise<SuccessCaseSection | null> {
  try {
    return await sanityClient.fetch(successCaseSectionQuery);
  } catch (error) {
    console.error('Error fetching success case section data:', error);
    return null;
  }
}
