import { SectionHeading } from "@/components/section-heading";
import { salonConfig } from "@/config/salon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "Privacy information for the Glory Beauty Salon brochure website demo.",
  path: "/privacy"
});

const sections = [
  ["Contact enquiries", "If contact-form delivery is configured in production, the salon may receive the details a visitor chooses to submit, such as name, email, phone, preferred location, subject and message."],
  ["External Square booking links", "Book Now actions are intended to open Square Appointments. Square provides its own privacy terms and handles booking information separately from this website."],
  ["Analytics placeholder", "Analytics are not configured in this demo. If analytics are added in production, the README should be updated to describe the tool and privacy impact."],
  ["Cookies placeholder", "This demo does not require marketing cookies. If cookie-based tools are added later, the privacy page should be updated before launch."],
  ["Contact information", `Questions about privacy can be directed to ${salonConfig.contactEmail || "the salon once an email address is connected"}.`]
];

export default function PrivacyPage() {
  return (
    <section className="bg-[#fffaf7] py-16">
      <div className="container-padded">
        <SectionHeading eyebrow="Privacy" title="Clear, simple privacy information">
          <p>This page is written for the brochure website demo and should be reviewed before final production launch.</p>
        </SectionHeading>
        <div className="mt-10 grid gap-5">
          {sections.map(([title, text]) => (
            <article key={title} className="rounded-lg border border-[#cfa188]/25 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-espresso/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
