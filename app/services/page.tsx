import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/sanity/fetchSiteContent";

export const metadata = pageMetadata({
  title: "Services",
  description: "Choose a Glory Beauty Salon location to view accurate services and pricing.",
  path: "/services"
});

export default async function ServicesPage() {
  const {salon, locations} = await getSiteContent();

  return (
    <section className="bg-[#fffaf7] py-16">
      <div className="container-padded">
        <SectionHeading eyebrow="Services" title="Choose your location">
          <p>{salon.priceNotice}</p>
        </SectionHeading>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article key={location.id} className="overflow-hidden rounded-lg border border-[#cfa188]/25 bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image src={location.image} alt={location.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-taupe">{location.status}</p>
                <h1 className="mt-2 font-serif text-4xl font-semibold">{location.name}</h1>
                <address className="mt-4 not-italic leading-7 text-espresso/75">
                  {location.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                  <span className="block">{location.phoneDisplay}</span>
                </address>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`/services/${location.id}`}>View Services</ButtonLink>
                  {location.directionsUrl ? <ButtonLink href={location.directionsUrl} external variant="secondary">Get Directions</ButtonLink> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
