import { HowReservationWorksSection } from '@studio/sanity.types';
import { howReservationWorksSectionQuery } from '../sanity-queries';
import { sanityClient } from '../client';

export async function getHowReservationWorksSectionData(): Promise<HowReservationWorksSection | null> {
  try {
    return await sanityClient.fetch(howReservationWorksSectionQuery);
  } catch (error) {
    console.error('Error fetching how reservation works section data:', error);
    return null;
  }
}
