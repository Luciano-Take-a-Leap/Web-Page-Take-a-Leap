import { WarrantySection } from "@studio/sanity.types";
import { warrantySectionQuery } from "../sanity-queries";
import { sanityClient } from "../client";

export async function getWarrantySectionData(): Promise<WarrantySection | null> {
  try {
    return await sanityClient.fetch(warrantySectionQuery);
  } catch (error) {
    console.error('Error fetching warranty section data:', error);
    return null;
  }
}