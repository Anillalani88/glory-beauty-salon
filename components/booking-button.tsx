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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const variants = {
    primary: "bg-espresso text-cream shadow-soft hover:bg-espresso/90 focus-visible:outline-espresso",
    secondary: "border border-espresso/25 bg-cream text-espresso hover:bg-blush focus-visible:outline-espresso",
    light: "border border-cream/35 bg-cream/10 text-cream hover:bg-cream/20 focus-visible:outline-cream"
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
        <div className="fixed inset-0 z-50 grid place-items-center bg-espresso/45 p-4" role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-md rounded-[1.25rem] bg-cream p-6 text-espresso shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-serif text-2xl font-semibold">
                Booking demo
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring grid size-10 shrink-0 place-items-center rounded-full border border-espresso/15"
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
              className="mt-6 inline-flex min-h-11 rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
