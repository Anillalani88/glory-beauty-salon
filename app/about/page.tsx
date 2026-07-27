import Image from "next/image";
import { BookingButton } from "@/components/booking-button";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/seo";
import { getSiteContent } from "@/sanity/fetchSiteContent";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Learn about Glory Beauty Salon's story, mission, personalized care and community support.",
  path: "/about"
});

const values = [
  ["Mission", "To provide exceptional beauty services that meet diverse client needs while enhancing natural beauty, confidence and well-being."],
  ["Personalized Care", "Each treatment is tailored to the client’s preferences, comfort and needs."],
  ["Quality Products", "Products are selected for efficacy, safety and skin-friendly quality."],
  ["Inclusive Environment", "The salon aims to be welcoming, respectful and comfortable for every client."],
  ["Client Satisfaction", "Long-term relationships are built on trust, respect and exceptional service."],
  ["Community Support", ""]
];

export default async function AboutPage() {
  const {salon} = await getSiteContent();
  const aboutValues = values.map(([title, text]) => [
    title,
    title === "Community Support" ? salon.donation.statement : text
  ]);

  return (
    <>
      <section className="container-padded grid gap-10 py-14 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
          <Image src="/images/about/about-story.jpg" alt="Warm salon setting representing Glory Beauty Salon's story." fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">About Us</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">Our story began with care, craft and welcome.</h1>
          <p className="mt-6 leading-8 text-espresso/75">
            With more than two decades of experience in the beauty industry, Glory Beauty Salon began its journey in 2000 with a modest start in a small salon and a dream to create a sanctuary where clients could enjoy beauty treatments in a warm and inviting atmosphere.
          </p>
        </div>
      </section>
      <section className="bg-blush/55 py-16">
        <div className="container-padded grid gap-8 lg:grid-cols-2">
          <SectionHeading eyebrow="Our Journey" title="Founded by Rozina and Nazim">
            <p>
              Glory Beauty Salon started in an intimate space that quickly became known for personalized services and heartfelt client care. Rozina’s vision is to create a welcoming beauty haven where every client feels valued, pampered and beautiful.
            </p>
            <p className="mt-4">
              Nazim brings experience in operations, accounting and management, helping the salon run smoothly so the team can focus on providing beauty services in a serene and welcoming environment.
            </p>
          </SectionHeading>
          <div className="rounded-[1.5rem] bg-cream p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-semibold">Our Story</h2>
            <p className="mt-4 leading-8 text-espresso/75">
              The team shares a passion for excellence and is committed to creating a haven of relaxation and beauty. Whether clients are seeking a quick wax, a rejuvenating facial or a hydradermabrasion treatment, the goal is to provide exceptional care and beautiful results.
            </p>
          </div>
        </div>
      </section>
      <section className="container-padded py-16">
        <SectionHeading eyebrow="What Guides Us" title="Beauty, well-being and satisfaction" center />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map(([title, text]) => (
            <article key={title} className="rounded-[1.5rem] border border-espresso/10 bg-cream p-6">
              <h2 className="font-serif text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-espresso/72">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-padded pb-16 text-center">
        <div className="rounded-[2rem] bg-espresso px-6 py-12 text-cream">
          <h2 className="font-serif text-4xl font-semibold">Book your next visit</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-cream/75">Square Appointments will be connected in production so clients can book directly.</p>
          <div className="mt-7"><BookingButton variant="light" /></div>
        </div>
      </section>
    </>
  );
}
