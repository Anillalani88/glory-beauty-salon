export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-taupe">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-espresso md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 leading-8 text-espresso/75">{children}</div> : null}
    </div>
  );
}
