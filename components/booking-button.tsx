"use client";

import { Calendar, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { salonConfig } from "@/config/salon";

export function BookingButton({
  label = "Book Now",
  variant = "primary",
  className = "",
  bookingUrl: bookingUrlOverride
}: {
  label?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  bookingUrl?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const bookingUrl = bookingUrlOverride || salonConfig.squareBookingUrl;
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.03em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const variants = {
    primary: "bg-[#472d27] text-[#fffaf7] shadow-sm ring-1 ring-[#472d27]/10 hover:bg-[#5a3931] hover:shadow-soft focus-visible:outline-espresso",
    secondary: "border border-[#cfa188]/35 bg-white/55 text-[#472d27] shadow-sm hover:bg-[#f8ede9] hover:shadow-soft focus-visible:outline-espresso",
    light: "border border-[#fffaf7]/50 bg-[#fffaf7] text-[#472d27] shadow-sm hover:bg-white hover:shadow-soft focus-visible:outline-cream"
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (bookingUrl) {
    return (
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
        aria-label={`${label} with Glory Beauty Salon through Square Appointments`}
      >
        <Calendar aria-hidden="true" size={18} />
        {label}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className={`${base} ${variants[variant]} ${className}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <Calendar aria-hidden="true" size={18} />
        {label}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#472d27]/45 p-4" role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-md rounded-lg bg-[#fffaf7] p-6 text-espresso shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-serif text-2xl font-semibold">
                Booking demo
              </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="focus-ring grid size-10 shrink-0 place-items-center rounded-full border border-espresso/15 bg-white/45"
              aria-label="Close booking demo dialog"
            >
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <p className="mt-4 leading-7 text-espresso/75">
              Square booking will open here once the salon’s booking link is connected.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={`${base} ${variants.primary} mt-6`}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
