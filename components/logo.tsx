import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex items-center gap-1 rounded-sm"
      aria-label="Glory Beauty Salon homepage"
    >
      {compact ? (
        <span className="grid size-11 place-items-center rounded-full bg-[#f8ede9] text-[#472d27] shadow-sm ring-1 ring-[#cfa188]/35">
          <span className="font-serif text-lg font-semibold uppercase tracking-[0.08em]">GB</span>
        </span>
      ) : (
        <>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f8ede9] text-[#472d27] shadow-sm ring-1 ring-[#cfa188]/35">
            <span className="font-serif text-lg font-semibold uppercase tracking-[0.08em]">GB</span>
          </span>
          <Image
            src="/images/logo/glory-beauty-wordmark.svg"
            alt="Glory Beauty Salon"
            width={190}
            height={55}
            className="h-auto w-[142px] sm:w-[176px]"
            priority
          />
        </>
      )}
    </Link>
  );
}
