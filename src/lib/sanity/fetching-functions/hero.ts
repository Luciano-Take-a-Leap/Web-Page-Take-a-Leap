import { Hero } from "@studio/sanity.types";
import { heroQuery } from "../sanity-queries";
import { sanityClient } from "../client";

export async function getHeroData(): Promise<Hero | null> {
  try {
    return await sanityClient.fetch(heroQuery);
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return null;
  }
}