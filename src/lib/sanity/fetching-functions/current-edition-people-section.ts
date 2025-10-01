import { CurrentEditionPeopleSection } from "@/types/sanity.types";
import { sanityClient } from "../client";
import { currentEditionPeopleSectionQuery } from "../sanity-queries";

export async function getCurrentEditionPeopleSectionData(): Promise<CurrentEditionPeopleSection | null> {
  try {
    return await sanityClient.fetch(currentEditionPeopleSectionQuery);
  } catch (error) {
    console.error('Error fetching current edition people section data:', error);
    return null;
  }
}