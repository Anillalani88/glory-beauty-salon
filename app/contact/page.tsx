import { HeartHandshake, Mail, MapPin, Phone } from "lucide-react";
import { BookingButton } from "@/components/booking-button";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/sanity/fetchSiteContent";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Contact Glory Beauty Salon in Stoney Creek or Welland and connect to Square Appointments.",
  path: "/contact"
});

export default async function ContactPage() {
  const {salon, locations} = await getSiteContent();

  return (
    <>
      <section className="container-padded py-14">
        <SectionHeading eyebrow="Contact Us" title="Connect with Glory Beauty Salon">
          <p>Use the location details below for calls, directions and appointment booking for Stoney Creek and Welland.</p>
        </SectionHeading>
      </section>
      <section className="container-padded grid gap-6 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
          {locations.map((location) => (
            <article key={location.id} className="rounded-lg border border-espresso/10 bg-cream p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-taupe">{location.status}</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">{location.name}</h2>
              <address className="mt-4 not-italic leading-7 text-espresso/75">
                <MapPin aria-hidden="true" className="mr-2 inline text-taupe" size={18} />
                {location.addressLines.join(", ")}
              </address>
              <p className="mt-3 leading-7 text-espresso/75">
                <Phone aria-hidden="true" className="mr-2 inline text-taupe" size={18} />
                {location.phone ? <a className="font-semibold underline underline-offset-4" href={`tel:${location.phone}`}>{location.phoneDisplay}</a> : location.phoneDisplay}
              </p>
              <p className="mt-3 leading-7 text-espresso/75">Email: {salon.contactEmail ? <a className="font-semibold underline underline-offset-4" href={`mailto:${salon.contactEmail}`}>{salon.contactEmail}</a> : "Email coming soon"}</p>
              <p className="mt-3 leading-7 text-espresso/75">Hours: {location.hours}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {location.directionsUrl ? <ButtonLink href={location.directionsUrl} external variant="secondary">Directions</ButtonLink> : null}
                <BookingButton label="Square Booking" variant="secondary" bookingUrl={salon.squareBookingUrl} />
              </div>
            </article>
          ))}
        </div>
        <aside className="rounded-lg bg-espresso p-6 text-cream shadow-soft lg:sticky lg:top-28 lg:self-start">
          <HeartHandshake aria-hidden="true" className="text-neutral" />
          <h2 className="mt-4 font-serif text-3xl font-semibold">Appointments and inquiries</h2>
          <p className="mt-4 leading-7 text-cream/76">
            Booking is intended to connect through Square Appointments once the final salon booking link is ready.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-cream/82">
            <p className="flex gap-2"><Phone aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-neutral" /> Stoney Creek: (905)-267-4841</p>
            <p className="flex gap-2"><Phone aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-neutral" /> Welland: Phone coming soon</p>
            <p className="flex gap-2"><Mail aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-neutral" /> {salon.contactEmail ?? "Email coming soon"}</p>
          </div>
          <div className="mt-7">
            <BookingButton label="Book Now" variant="light" bookingUrl={salon.squareBookingUrl} />
          </div>
        </aside>
      </section>
    </>
  );
}
