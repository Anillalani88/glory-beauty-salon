import {salonConfig} from "@/config/salon";
import {fallbackSiteContent, type SiteContent} from "@/content/fallback";
import type {SalonConfig} from "@/types/salon";
import {sanityClient} from "./client";
import {siteContentQuery} from "./queries";

function mergeSalonConfig(remote?: Partial<SalonConfig> | null): SalonConfig {
  return {
    ...fallbackSiteContent.salon,
    ...remote,
    donation: {
      ...fallbackSiteContent.salon.donation,
      ...remote?.donation
    },
    siteUrl: salonConfig.siteUrl,
    squareBookingUrl: remote?.squareBookingUrl || salonConfig.squareBookingUrl,
    contactEmail: remote?.contactEmail || salonConfig.contactEmail
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  if (!sanityClient) return fallbackSiteContent;

  try {
    const remote = await sanityClient.fetch<Partial<SiteContent>>(
      siteContentQuery,
      {siteUrl: salonConfig.siteUrl},
      {next: {revalidate: process.env.NODE_ENV === "development" ? 0 : 60}}
    );

    return {
      salon: mergeSalonConfig(remote.salon),
      locations: remote.locations?.length ? remote.locations : fallbackSiteContent.locations,
      categories: remote.categories?.length ? remote.categories : fallbackSiteContent.categories,
      services: remote.services?.length ? remote.services : fallbackSiteContent.services
    };
  } catch {
    return fallbackSiteContent;
  }
}

export function getLocation(content: SiteContent, id: string) {
  return content.locations.find((location) => location.id === id);
}

export function getServicesByCategory(content: SiteContent, categoryId: string) {
  return content.services
    .filter((service) => service.category === categoryId)
    .sort((a, b) => a.order - b.order);
}
