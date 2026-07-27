import type { MetadataRoute } from "next";
import { salonConfig } from "@/config/salon";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/contact", "/privacy"];
  const locationRoutes = locations.map((location) => `/services/${location.id}`);
  return [...staticRoutes, ...locationRoutes].map((route) => ({
    url: `${salonConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
