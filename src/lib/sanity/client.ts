import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: "drafts",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  stega: {
    enabled: false,
    studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL || 'http://localhost:3333' ,
  },
});
