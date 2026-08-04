import Link from "next/link";
import { salonConfig } from "@/config/salon";
import { locations } from "@/data/locations";
import { BookingButton } from "@/components/booking-button";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-[#cfa188]/25 bg-[#fffaf7]">
      <div className="container-padded grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm leading-7 text-espresso/75">{salonConfig.tagline}</p>
          <div className="mt-6">
            <BookingButton />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-espresso/70">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm font-semibold">
            <Link href="/about" className="hover:text-espresso/70">About Us</Link>
            <Link href="/services" className="hover:text-espresso/70">Services</Link>
            <Link href="/contact" className="hover:text-espresso/70">Contact Us</Link>
            <Link href="/privacy" className="hover:text-espresso/70">Privacy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-espresso/70">Locations</h2>
          <div className="mt-4 grid gap-4">
            {locations.map((location) => (
              <address key={location.id} className="not-italic leading-7 text-espresso/75">
                <strong className="block text-espresso">{location.name}</strong>
                {location.addressLines.join(", ")}
                <span className="block">{location.phoneDisplay}</span>
              </address>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#cfa188]/25 px-4 py-5 text-center text-sm text-espresso/65">
        © {new Date().getFullYear()} {salonConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
