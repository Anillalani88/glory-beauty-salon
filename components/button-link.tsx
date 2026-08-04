import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-[#472d27] text-[#fffaf7] shadow-sm ring-1 ring-[#472d27]/10 hover:bg-[#5a3931] hover:shadow-soft focus-visible:outline-espresso",
  secondary:
    "border border-[#cfa188]/35 bg-white/55 text-[#472d27] shadow-sm hover:bg-[#f8ede9] hover:shadow-soft focus-visible:outline-espresso",
  light:
    "border border-[#fffaf7]/50 bg-[#fffaf7] text-[#472d27] shadow-sm hover:bg-white hover:shadow-soft focus-visible:outline-cream"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.03em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
