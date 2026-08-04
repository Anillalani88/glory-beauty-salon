"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactFormDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-[#cfa188]/25 bg-white p-5 shadow-soft md:p-7"
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
            <input id={id} name={id} type={type} className="min-h-12 rounded-lg border border-[#cfa188]/30 bg-[#fffaf7] px-4" />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold">
          Preferred location
          <select name="location" className="min-h-12 rounded-lg border border-[#cfa188]/30 bg-[#fffaf7] px-4">
            <option>Stoney Creek</option>
            <option>Welland</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
          Subject
          <input name="subject" type="text" className="min-h-12 rounded-lg border border-[#cfa188]/30 bg-[#fffaf7] px-4" />
        </label>
        <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
          Message
          <textarea name="message" rows={5} className="rounded-lg border border-[#cfa188]/30 bg-[#fffaf7] px-4 py-3" />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#472d27] px-6 py-3 text-sm font-semibold tracking-[0.03em] text-[#fffaf7] shadow-sm ring-1 ring-[#472d27]/10 transition duration-200 hover:bg-[#5a3931] hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
      >
        <Send aria-hidden="true" size={17} />
        Send demo message
      </button>
      {submitted ? (
        <p role="status" className="mt-4 rounded-lg bg-[#f8ede9] p-4 leading-7 text-espresso/75">
          This is a website demo. Contact-form delivery will be configured in the production version.
        </p>
      ) : null}
    </form>
  );
}
