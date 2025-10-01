import { ReasonSection } from "@/types/sanity.types";
import { sanityClient } from "../client";
import { reasonSectionQuery } from "../sanity-queries";

export async function getReasonSectionData(): Promise<ReasonSection | null> {
  try {
    return await sanityClient.fetch(reasonSectionQuery);
  } catch (error) {
    console.error('Error fetching reason section data:', error);
    return null;
  }
}