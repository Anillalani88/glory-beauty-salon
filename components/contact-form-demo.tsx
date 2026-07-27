"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactFormDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[1.5rem] border border-espresso/10 bg-cream p-5 shadow-soft md:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="font-serif text-3xl font-semibold">Contact form demo</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ["name", "Name", "text"],
          ["email", "Email", "email"],
          ["phone", "Phone", "tel"]
        ].map(([id, label, type]) => (
          <label key={id} className="grid gap-2 text-sm font-semibold">
            {label}
            <input id={id} name={id} type={type} className="min-h-12 rounded-xl border border-espresso/15 bg-white/70 px-4" />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold">
          Preferred location
          <select name="location" className="min-h-12 rounded-xl border border-espresso/15 bg-white/70 px-4">
            <option>Stoney Creek</option>
            <option>Welland</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
          Subject
          <input name="subject" type="text" className="min-h-12 rounded-xl border border-espresso/15 bg-white/70 px-4" />
        </label>
        <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
          Message
          <textarea name="message" rows={5} className="rounded-xl border border-espresso/15 bg-white/70 px-4 py-3" />
        </label>
      </div>
      <button type="submit" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream">
        <Send aria-hidden="true" size={17} />
        Send demo message
      </button>
      {submitted ? (
        <p role="status" className="mt-4 rounded-2xl bg-blush p-4 leading-7 text-espresso/75">
          This is a website demo. Contact-form delivery will be configured in the production version.
        </p>
      ) : null}
    </form>
  );
}
