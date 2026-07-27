import type { Metadata } from "next";
import { salonConfig } from "@/config/salon";

export function absoluteUrl(path = "") {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${salonConfig.siteUrl}${suffix}`;
}

export function pageMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: salonConfig.name,
      type: "website",
      images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: `${salonConfig.name} website preview` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og.png")]
    }
  };
}
