"use client";

import { ButtonLink } from "@/components/button-link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-[#fffaf7] px-4 py-16 text-center">
      <div className="w-full max-w-2xl rounded-lg border border-[#cfa188]/25 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">Something went wrong</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">This page needs a refresh</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-espresso/75">The website demo hit an unexpected issue.</p>
        <div className="mt-7 flex justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#472d27] px-6 py-3 text-sm font-semibold tracking-[0.03em] text-[#fffaf7] shadow-sm ring-1 ring-[#472d27]/10 transition duration-200 hover:bg-[#5a3931] hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
          >
            Try Again
          </button>
          <ButtonLink href="/" variant="secondary">Return Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
