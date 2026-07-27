import type { SalonConfig } from "@/types/salon";

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const envBookingUrl = process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL?.trim();
const envContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

export const salonConfig: SalonConfig = {
  name: "Glory Beauty Salon",
  legalName: "Glory Beauty Salon",
  tagline:
    "Where beauty embraces wellness, and every visit is a step towards feeling your best.",
  siteUrl: envSiteUrl || "https://www.glorybeautysalon.ca",
  canonicalHost: "www.glorybeautysalon.ca",
  alternateHosts: ["glorybeautysalon.ca"],
  squareBookingUrl: envBookingUrl || undefined,
  contactEmail: envContactEmail || undefined,
  demoNotice:
    "Client preview - booking and contact actions are ready to connect once final links are provided.",
  womenOnlyNotice:
    "Please note that all services listed below, except those under Men’s Services, are available exclusively for women.",
  priceNotice:
    "Prices may vary by location. Please ensure that you are viewing the correct location for accurate pricing.",
  donation: {
    organization: "Breast Cancer Canada",
    amountCad: 0.35,
    service: "eyebrow service",
    statement:
      "Glory Beauty Salon believes in giving back to the community and currently donates $0.35 from every eyebrow service to Breast Cancer Canada."
  }
};
