import {salonConfig} from "@/config/salon";
import {categories} from "@/data/categories";
import {locations} from "@/data/locations";
import {services} from "@/data/services";
import type {Location, SalonConfig, Service, ServiceCategory} from "@/types/salon";

export interface SiteContent {
  salon: SalonConfig;
  locations: Location[];
  categories: ServiceCategory[];
  services: Service[];
}

export const fallbackSiteContent: SiteContent = {
  salon: salonConfig,
  locations,
  categories,
  services
};
