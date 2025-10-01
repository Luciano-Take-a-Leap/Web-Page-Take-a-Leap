import { defineLive } from "next-sanity";
import { sanityClient } from "./client";

const livePreviewSecret = process.env.SANITY_API_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
 client: sanityClient,
 serverToken: livePreviewSecret,
 browserToken: livePreviewSecret,
});