"use client";

import { ButtonLink } from "@/components/button-link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-padded grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">Something went wrong</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">This page needs a refresh</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-espresso/75">The website demo hit an unexpected issue.</p>
        <div className="mt-7 flex justify-center gap-3">
          <button type="button" onClick={reset} className="inline-flex min-h-11 items-center justify-center rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream">Try Again</button>
          <ButtonLink href="/" variant="secondary">Return Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
