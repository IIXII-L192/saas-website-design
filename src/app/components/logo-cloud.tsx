const brands = ["Northwind", "Acme", "Vertex", "Monolith", "Cortex", "Helios"];

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-secondary/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[13px] text-muted-foreground">
          Trusted by fast-moving teams at
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((b) => (
            <span
              key={b}
              className="text-[19px] text-foreground/40 transition-colors hover:text-foreground/70"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
