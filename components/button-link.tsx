import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-espresso text-cream shadow-soft hover:bg-espresso/90 focus-visible:outline-espresso",
  secondary:
    "border border-espresso/25 bg-cream text-espresso hover:bg-blush focus-visible:outline-espresso",
  light:
    "border border-cream/35 bg-cream/10 text-cream hover:bg-cream/20 focus-visible:outline-cream"
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
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`;

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
