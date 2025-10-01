import { ConversationSection } from "@studio/sanity.types";
import { sanityClient } from "../client";
import { conversationSectionQuery } from "../sanity-queries";

export async function getConversationSectionData(): Promise<ConversationSection | null> {
  try {
    return await sanityClient.fetch(conversationSectionQuery);
  } catch (error) {
    console.error('Error fetching conversation section data:', error);
    return null;
  }
}