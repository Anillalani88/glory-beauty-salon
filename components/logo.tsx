import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-sm" aria-label="Glory Beauty Salon homepage">
      <Image
        src="/images/logo/glory-beauty-logo.png"
        alt="Glory Beauty Salon"
        width={compact ? 48 : 184}
        height={compact ? 48 : 62}
        className={compact ? "size-12 rounded-full object-cover" : "h-auto w-[184px] max-w-[52vw]"}
        priority
      />
      <span className={compact ? "sr-only" : "leading-none"}>
        <span className="sr-only">Glory Beauty Salon</span>
      </span>
    </Link>
  );
}
