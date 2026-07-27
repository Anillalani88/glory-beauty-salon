import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingButton } from "@/components/booking-button";
import { ButtonLink } from "@/components/button-link";
import { ServicePriceList } from "@/components/service-price-list";
import { locations } from "@/data/locations";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getLocation, getSiteContent } from "@/sanity/fetchSiteContent";
import type { LocationId } from "@/types/salon";

type Props = {
  params: Promise<{ location: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ location: location.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const content = await getSiteContent();
  const location = getLocation(content, locationSlug);
  if (!location) return {};

  return pageMetadata({
    title: `${location.name} Services`,
    description: `View ${location.name} service pricing for Glory Beauty Salon.`,
    path: `/services/${location.id}`
  });
}

export default async function LocationServicesPage({ params }: Props) {
  const { location: locationSlug } = await params;
  const content = await getSiteContent();
  const location = getLocation(content, locationSlug);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: `${content.salon.name} - ${location.name}`,
    url: absoluteUrl(`/services/${location.id}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLines[0],
      addressLocality: location.name === "Stoney Creek" ? "Stoney Creek" : "Welland",
      addressRegion: "ON",
      postalCode: location.addressLines[2],
      addressCountry: "CA"
    },
    telephone: location.phone ? location.phoneDisplay : undefined
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-blush/55 py-14">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">Services</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">{location.name} Services</h1>
          <p className="mt-5 max-w-3xl leading-8 text-espresso/75">{location.status}. {content.salon.priceNotice}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookingButton label={`Book ${location.name}`} bookingUrl={content.salon.squareBookingUrl} />
            <ButtonLink href="/services" variant="secondary">Change Location</ButtonLink>
          </div>
        </div>
      </section>
      <section className="container-padded py-8">
        <div className="grid gap-4 rounded-[1.5rem] border border-espresso/10 bg-cream p-5 md:grid-cols-2">
          <p className="leading-7 text-espresso/75">{content.salon.priceNotice}</p>
          <p className="leading-7 text-espresso/75">{content.salon.womenOnlyNotice}</p>
        </div>
      </section>
      <nav className="container-padded sticky top-[77px] z-30 overflow-x-auto border-y border-espresso/10 bg-cream/95 py-3 backdrop-blur" aria-label="Service categories">
        <div className="flex min-w-max gap-2 pr-4">
          {content.categories.map((category) => (
            <a key={category.id} href={`#${category.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-espresso/10 px-4 py-2 text-sm font-semibold text-espresso/80 hover:bg-blush">
              {category.name}
            </a>
          ))}
        </div>
      </nav>
      <section className="container-padded py-10">
        <ServicePriceList locationId={location.id as LocationId} content={content} />
      </section>
    </>
  );
}
