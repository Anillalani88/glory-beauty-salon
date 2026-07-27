export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-21";

export const isSanityConfigured = Boolean(
  sanityProjectId && sanityProjectId !== "replace-with-sanity-project-id"
);
