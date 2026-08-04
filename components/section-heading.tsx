export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  tone = "dark"
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
  tone?: "dark" | "light";
}) {
  const eyebrowClass = tone === "light" ? "text-cream/65" : "text-taupe";
  const titleClass = tone === "light" ? "text-cream" : "text-espresso";
  const bodyClass = tone === "light" ? "text-cream/75" : "text-espresso/75";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`text-sm font-bold uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl ${titleClass}`}>{title}</h2>
      {children ? <div className={`mt-5 leading-8 ${bodyClass}`}>{children}</div> : null}
    </div>
  );
}
