import {groq} from "next-sanity";

const imageUrl = "image.asset->url";

export const siteContentQuery = groq`{
  "salon": *[_type == "salonSettings"][0]{
    name,
    "legalName": coalesce(name, "Glory Beauty Salon"),
    heroEyebrow,
    tagline,
    demoNotice,
    priceNotice,
    womenOnlyNotice,
    contactEmail,
    squareBookingUrl,
    donation,
    "siteUrl": $siteUrl,
    "canonicalHost": "www.glorybeautysalon.ca",
    "alternateHosts": ["glorybeautysalon.ca"]
  },
  "locations": *[_type == "location"] | order(name asc) {
    id,
    name,
    status,
    addressLines,
    phone,
    phoneDisplay,
    hours,
    directionsUrl,
    "image": coalesce(${imageUrl}, fallbackImage),
    imageAlt
  },
  "categories": *[_type == "serviceCategory"] | order(order asc) {
    id,
    "slug": slug.current,
    name,
    shortDescription,
    description,
    "image": coalesce(${imageUrl}, fallbackImage),
    imageAlt,
    order
  },
  "services": *[_type == "service"] | order(category->order asc, order asc) {
    id,
    code,
    "slug": slug.current,
    name,
    "category": category->id,
    shortDescription,
    fullDescription,
    "image": coalesce(${imageUrl}, fallbackImage),
    imageAlt,
    order,
    womenOnly,
    featured,
    locationPrices,
    priceNote
  },
  "googleReviews": *[_type == "googleReview" && featured == true] | order(order asc, _createdAt desc)[0...6] {
    "id": _id,
    authorName,
    rating,
    reviewText,
    publishedLabel,
    reviewUrl,
    locationName,
    featured,
    order
  }
}`;
