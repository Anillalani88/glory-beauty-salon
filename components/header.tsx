"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookingButton } from "@/components/booking-button";
import { Logo } from "@/components/logo";

const serviceLinks = [
  { href: "/services/stoney-creek", label: "Stoney Creek" },
  { href: "/services/welland", label: "Welland" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-[100] isolate border-b border-[#cfa188]/25 bg-[#fffaf7]/95 shadow-sm backdrop-blur">
      <nav className="container-padded flex min-h-[82px] items-center justify-between gap-6" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          <Link className="focus-ring rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-espresso/72 hover:text-espresso" href="/about">
            About Us
          </Link>
          <div className="group relative">
            <Link
              href="/services"
              className="focus-ring inline-flex items-center gap-1 rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-espresso/72 hover:text-espresso"
              aria-haspopup="true"
            >
              Services <ChevronDown aria-hidden="true" size={16} />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-lg border border-[#cfa188]/25 bg-[#fffaf7] p-2 shadow-soft">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="focus-ring block rounded-md px-4 py-3 text-sm font-semibold text-espresso/75 hover:bg-[#f8ede9] hover:text-espresso"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="focus-ring rounded-sm text-xs font-bold uppercase tracking-[0.18em] text-espresso/72 hover:text-espresso" href="/contact">
            Contact Us
          </Link>
          <BookingButton />
        </div>
        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border border-espresso/15 lg:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"}`}
      >
        <div className="max-h-[calc(100vh-82px)] overflow-y-auto border-t border-[#cfa188]/25 bg-[#fffaf7] px-4 pb-6 pt-2">
          <div className="mx-auto flex max-w-xl flex-col gap-2">
            <Link onClick={close} className="focus-ring rounded-2xl px-4 py-4 text-base font-semibold" href="/about">
              About Us
            </Link>
            <Link onClick={close} className="focus-ring rounded-2xl px-4 py-4 text-base font-semibold" href="/services">
              Services
            </Link>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                onClick={close}
                className="focus-ring rounded-2xl bg-[#f8ede9] px-6 py-4 text-base font-semibold"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link onClick={close} className="focus-ring rounded-2xl px-4 py-4 text-base font-semibold" href="/contact">
              Contact Us
            </Link>
            <div className="px-4 pt-2">
              <BookingButton className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
