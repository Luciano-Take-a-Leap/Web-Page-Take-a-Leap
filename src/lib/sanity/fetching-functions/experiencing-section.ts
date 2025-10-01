import { ExperiencingSection } from '@studio/sanity.types';
import { sanityClient } from '../client';
import { experiencingSectionQuery } from '../sanity-queries';

export async function getExperiencingSectionData(): Promise<ExperiencingSection | null> {
  try {
    return await sanityClient.fetch(experiencingSectionQuery);
  } catch (error) {
    console.error('Error fetching experiencing section data:', error);
    return null;
  }
}
