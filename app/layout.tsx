import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { salonConfig } from "@/config/salon";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { absoluteUrl } from "@/lib/seo";

const headingFont = localFont({
  src: [
    { path: "../public/fonts/georgia.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/georgia-bold.ttf", weight: "700", style: "normal" }
  ],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = localFont({
  src: [
    { path: "../public/fonts/segoe-ui.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/segoe-ui-bold.ttf", weight: "700", style: "normal" }
  ],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(salonConfig.siteUrl),
  title: {
    default: `${salonConfig.name} | Beauty Salon in Stoney Creek and Welland`,
    template: `%s | ${salonConfig.name}`
  },
  description:
    "A warm, refined website for Glory Beauty Salon, featuring services, pricing, locations and booking guidance.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: salonConfig.name,
    description: salonConfig.tagline,
    url: absoluteUrl("/"),
    siteName: salonConfig.name,
    type: "website",
    images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: `${salonConfig.name} preview` }]
  },
  twitter: {
    card: "summary_large_image",
    title: salonConfig.name,
    description: salonConfig.tagline,
    images: [absoluteUrl("/og.png")]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
