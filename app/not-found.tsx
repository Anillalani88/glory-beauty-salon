import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-[#fffaf7] px-4 py-16 text-center">
      <div className="w-full max-w-2xl rounded-lg border border-[#cfa188]/25 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">404</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-espresso/75">The page you are looking for is not part of this website demo.</p>
        <div className="mt-7"><ButtonLink href="/">Return Home</ButtonLink></div>
      </div>
    </section>
  );
}
