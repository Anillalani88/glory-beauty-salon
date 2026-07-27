export type LocationId = "stoney-creek" | "welland";

export interface SalonConfig {
  name: string;
  legalName: string;
  tagline: string;
  siteUrl: string;
  canonicalHost: string;
  alternateHosts: string[];
  squareBookingUrl?: string;
  contactEmail?: string;
  demoNotice: string;
  womenOnlyNotice: string;
  priceNotice: string;
  donation: {
    organization: string;
    amountCad: number;
    service: string;
    statement: string;
  };
}

export interface Location {
  id: LocationId;
  name: string;
  status: string;
  addressLines: string[];
  phone?: string;
  phoneDisplay: string;
  hours: string;
  directionsUrl?: string;
  image: string;
  imageAlt: string;
}

export interface LocationPrice {
  locationId: LocationId;
  price?: number;
  available: boolean;
  note?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  order: number;
}

export interface Service {
  id: string;
  code: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  order: number;
  womenOnly: boolean;
  featured: boolean;
  locationPrices: LocationPrice[];
  priceNote?: string;
}
