const quotes = [
  {
    quote:
      "Lumen replaced four tools for us. Onboarding a new designer went from a week to an afternoon.",
    name: "Sofia Reyes",
    role: "Head of Design, Vertex",
  },
  {
    quote:
      "It's the first productivity app that feels like it was designed by people who actually care.",
    name: "Marcus Lin",
    role: "Founder, Northwind",
  },
  {
    quote:
      "The speed is unreal. Search is instant, sync is instant. I never wait on my tools anymore.",
    name: "Priya Nair",
    role: "Eng Lead, Helios",
  },
  {
    quote:
      "Our whole company runs on Lumen now — docs, planning, dashboards. It just stays out of the way.",
    name: "Daniel Okoro",
    role: "COO, Monolith",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="border-t border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="max-w-2xl text-[34px] leading-[1.1] md:text-[48px]"
          style={{ fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Loved by the people who use it every day.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between rounded-3xl border border-border bg-background p-8"
            >
              <blockquote className="text-[20px] leading-relaxed text-foreground/90" style={{ letterSpacing: "-0.01em" }}>
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div
                  className="grid size-10 place-items-center rounded-full bg-foreground text-background text-[14px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[14px]" style={{ fontWeight: 600 }}>
                    {q.name}
                  </div>
                  <div className="text-[13px] text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
