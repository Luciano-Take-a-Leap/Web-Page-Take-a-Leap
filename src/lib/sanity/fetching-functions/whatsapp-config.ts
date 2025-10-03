import { sanityClient } from "../client";
import { whatsappConfigQuery } from "../sanity-queries";

export async function fetchWhatsAppConfig() {
  try {
    return await sanityClient.fetch(whatsappConfigQuery, {}, {
      stega: false,
    });
  } catch (error) {
    console.error('Error fetching Whatsapp configuration data', error);
    return null;
  }
}
