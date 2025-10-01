import { AboutMeSection } from "@/types/sanity.types";
import { sanityClient } from "../client";
import { aboutMeSectionQuery } from "../sanity-queries";

export async function getAboutMeSectionData(): Promise<AboutMeSection | null> {
  try {
    return await sanityClient.fetch(aboutMeSectionQuery);
  } catch (error) {
    console.error('Error fetching about me section data:', error);
    return null;
  }
}