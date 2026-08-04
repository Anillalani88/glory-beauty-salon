import { Heart, Leaf, Sparkles, Star, Users } from "lucide-react";
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

const why = [
  { icon: Sparkles, title: "More than two decades of experience", text: "A beauty journey that began in 2000 and continues with care, consistency and refinement." },
  { icon: Users, title: "Personalized treatments", text: "Services are tailored to each client’s preferences, skin needs and comfort." },
  { icon: Leaf, title: "High-quality products", text: "Carefully selected products support efficacy, safety and skin-friendly results." },
  { icon: Heart, title: "Welcoming environment", text: "A calm, inclusive salon atmosphere where clients feel valued and understood." }
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-blush/65 lg:block" aria-hidden="true" />
        <div className="container-padded grid min-h-[calc(100svh-118px)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-taupe">{salon.heroEyebrow}</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] text-espresso md:text-7xl">
              {salon.tagline}
            </h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services">Discover Our Services</ButtonLink>
              <BookingButton label="Book an Appointment" variant="secondary" bookingUrl={salon.squareBookingUrl} />
            </div>
          </div>
          <div className="relative aspect-[4/5] min-h-[420px] overflow-hidden rounded-[2rem] border border-espresso/10 shadow-soft">
            <Image src="/images/home/home-hero.jpg" alt="Calm facial treatment room for a refined salon experience." fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-padded py-16">
        <SectionHeading eyebrow="Our Services" title="Beauty services made easy to explore">
          <p>Choose from precise hair removal, rejuvenating facials and men’s brow grooming, with service details and prices organized by location.</p>
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category.id} className="group overflow-hidden rounded-[1.5rem] border border-espresso/10 bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={category.image} alt={category.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-2xl font-semibold">{category.name}</h2>
                <p className="mt-3 leading-7 text-espresso/70">{category.shortDescription}</p>
                <Link href="/services" className="mt-4 inline-flex font-bold text-espresso underline decoration-taupe/50 underline-offset-4">
                  View Services
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blush/55 py-16">
        <div className="container-padded">
          <SectionHeading eyebrow="Why Choose Us" title="Warm care with professional attention" center />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-espresso/10 bg-cream/75 p-6">
                <item.icon aria-hidden="true" className="text-taupe" />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-espresso/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-padded grid gap-10 py-16 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/about/about-story.jpg" alt="Warm salon interior representing the Glory Beauty Salon story." fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
        </div>
        <SectionHeading eyebrow="About Glory Beauty Salon" title="A salon story rooted in care">
          <p>
            Founded by Rozina and Nazim, Glory Beauty Salon began its journey in 2000 with a dream of creating a warm sanctuary for luxurious beauty treatments. Rozina’s vision is a welcoming space where every client feels valued, pampered and beautiful, while Nazim supports the business through operations, accounting and management experience.
          </p>
          <div className="mt-7">
            <ButtonLink href="/about" variant="secondary">Read Our Story</ButtonLink>
          </div>
        </SectionHeading>
      </section>

      {googleReviews.length ? (
        <section className="bg-blush/55 py-16">
          <div className="container-padded">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
              <SectionHeading eyebrow="Google Reviews" title="Kind words from salon guests">
                <p>Real client feedback selected from Glory Beauty Salon&apos;s Google reviews.</p>
              </SectionHeading>
              <div className="flex justify-start lg:justify-end">
                <Link
                  href={googleReviews.find((review) => review.reviewUrl)?.reviewUrl ?? "https://www.google.com/search?q=Glory+Beauty+Salon+reviews"}
                  className="focus-ring inline-flex min-h-11 items-center rounded-full border border-espresso/20 bg-cream px-5 py-3 text-sm font-bold text-espresso transition hover:bg-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google
                </Link>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {googleReviews.map((review) => (
                <article key={review.id} className="rounded-[1.25rem] border border-espresso/10 bg-cream p-6 shadow-sm">
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
                  <blockquote className="mt-5 leading-7 text-espresso/75">&ldquo;{review.reviewText}&rdquo;</blockquote>
                  <div className="mt-6 border-t border-espresso/10 pt-4">
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

      <section className="container-padded py-16">
        <SectionHeading eyebrow="Locations" title="Visit us in Stoney Creek or Welland" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {locations.map((location) => (
            <article key={location.id} className="rounded-[1.5rem] border border-espresso/10 bg-cream p-5 shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem]">
                <Image src={location.image} alt={location.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-taupe">{location.status}</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">{location.name}</h2>
              <address className="mt-3 not-italic leading-7 text-espresso/75">
                {location.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                <span className="block">{location.phoneDisplay}</span>
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href={`/services/${location.id}`} variant="secondary">View Services</ButtonLink>
                {location.directionsUrl ? <ButtonLink href={location.directionsUrl} external variant="secondary">Get Directions</ButtonLink> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-espresso py-16 text-cream">
        <div className="container-padded grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-neutral">Community Support</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Giving back with quiet purpose</h2>
            <p className="mt-5 max-w-3xl leading-8 text-cream/78">{salon.donation.statement}</p>
          </div>
          <div className="rounded-lg border border-cream/15 bg-cream/10 p-6">
            <p className="font-serif text-5xl font-semibold">$0.35</p>
            <p className="mt-3 leading-7 text-cream/78">donated from every eyebrow service to {salon.donation.organization}.</p>
          </div>
        </div>
      </section>

      <section className="container-padded py-16 text-center">
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">Ready to feel your best?</h2>
        <div className="mt-7">
          <BookingButton label="Book Now" bookingUrl={salon.squareBookingUrl} />
        </div>
      </section>
    </>
  );
}
