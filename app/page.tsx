import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookingButton } from "@/components/booking-button";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/sanity/fetchSiteContent";

export const metadata = pageMetadata({
  title: "Glory Beauty Salon",
  description: "A warm salon website for services, pricing, locations and Square appointment booking.",
  path: "/"
});

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=2d0f82e09bd2a808&sxsrf=APpeQnvC2D3qV_C9fc1r_X022YZ_TMFHLQ:1785856232170&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zEwZ3Fm41U_MkgrUMmcGlfMSoaM_eL0MUYlhb3x1iyokPD-d41HRd7c143ssPQdgQ1qVhVNqpFiauu9y9UdX0OeRqRpI0iKr9jBNrMEtfTYBDriGg%3D%3D&q=Glory+Beauty+Salon+Reviews&sa=X&ved=2ahUKEwi1jdryoIeWAxXx4skDHTqSKWQQ0bkNegQIORAH&biw=1280&bih=665&dpr=1.5";

const reasons = [
  { label: "✨", title: "Experience", text: "Beauty care shaped by more than two decades of hands-on practice." },
  { label: "🌿", title: "Personal", text: "Thoughtful treatments matched to your comfort, skin and style." },
  { label: "🤍", title: "Gentle", text: "Precise hair removal and facial services with a calm, careful approach." },
  { label: "⭐", title: "Trusted", text: "A welcoming salon for regular visits, special moments and everyday polish." }
];

export default async function Home() {
  const {salon, categories, locations, googleReviews} = await getSiteContent();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: salon.name,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/logo/glory-beauty-logo.png"),
    description: salon.tagline,
    address: locations.map((location) => ({
      "@type": "PostalAddress",
      streetAddress: location.addressLines[0],
      addressLocality: location.name,
      addressRegion: "ON",
      postalCode: location.addressLines[2],
      addressCountry: "CA"
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate min-h-[calc(92svh-82px)] overflow-hidden bg-[#472d27] text-[#fffaf7]">
        <Image
          src="/images/home/home-hero.jpg"
          alt="Glory Beauty Salon treatment room with a calm, polished beauty atmosphere."
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58 saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-[#472d27]/38" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#472d27]/96 via-[#8f5f50]/72 to-[#cfa188]/22" aria-hidden="true" />
        <div className="absolute inset-y-0 left-0 w-[68%] bg-gradient-to-r from-[#472d27]/55 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#472d27]/88 to-transparent" aria-hidden="true" />
        <div className="container-padded relative z-10 flex min-h-[calc(92svh-82px)] items-center py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f8ede9]/82 sm:text-sm">Glory Beauty Salon</p>
            <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2.1rem,4.5vw,4.1rem)] font-normal leading-[1.08] text-[#fffaf7]">
              Where beauty feels calm, careful, and refined.
            </h1>
            <span className="mt-5 block h-px w-20 bg-[#cfa188]/75" aria-hidden="true" />
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingButton label="Online Booking" variant="light" bookingUrl={salon.squareBookingUrl} />
              <ButtonLink href="/services" variant="light">Explore Services</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#472d27] py-24 text-[#fffaf7]">
        <div className="container-padded">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-end">
            <SectionHeading eyebrow="Services" title={"Signature\u00A0treatments"} tone="light" />
            <div className="flex justify-start lg:justify-end">
              <ButtonLink href="/services" variant="light">View Full Menu</ButtonLink>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href="/services"
                className="group grid overflow-hidden rounded-lg border border-[#cfa188]/22 bg-[#fffaf7] text-[#472d27] shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e7d3c9]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-[150px] flex-col p-6">
                  <h3 className="font-serif text-3xl font-semibold leading-tight">{category.name}</h3>
                  <span className="mt-auto inline-flex pt-6 text-xs font-bold uppercase tracking-[0.16em] text-espresso/70">
                    View Services
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf7] py-24">
        <div className="container-padded grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-taupe">Why Choose Us</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-espresso md:text-6xl">
              Beauty care, considered.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image src="/images/about/about-story.jpg" alt="Calm salon interior at Glory Beauty Salon." fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              </div>
              <div className="grid gap-3 pt-10">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src="/images/services/threading.jpg" alt="Precise threading service detail." fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src="/images/services/casmara-facial.jpg" alt="Relaxing facial treatment setup." fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-lg border border-[#cfa188]/25 bg-white p-6 shadow-sm">
                <p className="grid size-10 place-items-center rounded-full bg-[#f8ede9] text-xl shadow-sm ring-1 ring-[#cfa188]/35" aria-hidden="true">
                  {reason.label}
                </p>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-espresso">{reason.title}</h3>
                <p className="mt-3 leading-7 text-espresso/66">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8ede9] py-24">
        <div className="container-padded grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-lg">
            <Image src="/images/about/about-story.jpg" alt="Warm salon interior representing the Glory Beauty Salon story." fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Since 2000" title="A calm place for polished beauty." />
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">Read our story</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {googleReviews.length ? (
        <section className="bg-[#f8ede9] py-24">
          <div className="container-padded">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
              <SectionHeading eyebrow="Reviews" title="Kind words" />
              <div className="flex justify-start lg:justify-end">
                <ButtonLink
                  href={googleReviewsUrl}
                  external
                  variant="secondary"
                  ariaLabel="View Glory Beauty Salon reviews on Google"
                >
                  View on Google
                </ButtonLink>
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {googleReviews.map((review) => (
                <article key={review.id} className="rounded-lg border border-[#cfa188]/25 bg-[#fffaf7] p-6 shadow-sm">
                  <div className="flex gap-1 text-taupe" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({length: 5}).map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        aria-hidden="true"
                        className={index < Math.round(review.rating) ? "fill-current" : "text-espresso/20"}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-serif text-2xl leading-snug text-espresso">&ldquo;{review.reviewText}&rdquo;</blockquote>
                  <div className="mt-6">
                    <p className="font-bold text-espresso">{review.authorName}</p>
                    <p className="mt-1 text-sm text-espresso/60">
                      {[review.locationName, review.publishedLabel].filter(Boolean).join(" - ") || "Google review"}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#fffaf7] py-24">
        <div className="container-padded">
          <SectionHeading eyebrow="Locations" title="Visit us" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <article key={location.id} className="overflow-hidden rounded-lg border border-[#cfa188]/25 bg-white shadow-sm">
                <div className="relative aspect-[16/10]">
                  <Image src={location.image} alt={location.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">{location.status}</p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold">{location.name}</h2>
                  <address className="mt-4 not-italic leading-7 text-espresso/70">
                    {location.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                    <span className="mt-2 block font-semibold text-espresso">{location.phoneDisplay}</span>
                  </address>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonLink href={`/services/${location.id}`} variant="secondary">View Services</ButtonLink>
                    {location.directionsUrl ? (
                      <ButtonLink href={location.directionsUrl} external variant="secondary">
                        <MapPin aria-hidden="true" size={17} className="mr-2" />
                        Get Directions
                      </ButtonLink>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#472d27] py-12 text-[#fffaf7]">
        <div className="container-padded flex flex-col gap-3 text-sm text-cream/72 md:flex-row md:items-center md:justify-between">
          <p className="font-bold uppercase tracking-[0.18em] text-cream/82">Community Support</p>
          <p>$0.35 from every eyebrow service supports {salon.donation.organization}.</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf7] py-24 text-center">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-taupe">Book Your Visit</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
            Ready to feel your best?
          </h2>
          <div className="mt-8">
            <BookingButton label="Book Now" bookingUrl={salon.squareBookingUrl} />
          </div>
        </div>
      </section>
    </>
  );
}

