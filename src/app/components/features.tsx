import { Sparkles, Zap, Shield, Layers, LineChart, Command } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intelligence built in",
    body: "Summaries, drafts, and answers appear inline — grounded in your own workspace, never generic.",
  },
  {
    icon: Zap,
    title: "Instant everything",
    body: "Search, navigation, and sync respond in under 50ms. Speed you feel, not just measure.",
  },
  {
    icon: Layers,
    title: "One calm surface",
    body: "Docs, tasks, and data live together. No tab-hopping, no context switching.",
  },
  {
    icon: LineChart,
    title: "Insight on demand",
    body: "Turn any table into a live chart with a keystroke. Dashboards that stay current.",
  },
  {
    icon: Shield,
    title: "Private by design",
    body: "End-to-end encryption, SOC 2 Type II, and granular controls your security team will love.",
  },
  {
    icon: Command,
    title: "Keyboard-first",
    body: "Every action is a shortcut away. Built for people who never touch the mouse.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-[13px] uppercase tracking-[0.16em] text-primary" style={{ fontWeight: 600 }}>
          Why Lumen
        </p>
        <h2
          className="mt-3 text-[34px] leading-[1.1] md:text-[48px]"
          style={{ fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Powerful, yet perfectly quiet.
        </h2>
        <p className="mt-4 text-[18px] leading-relaxed text-muted-foreground">
          Every detail is engineered to reduce friction — so the tool fades away and the work comes forward.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group bg-background p-8 transition-colors hover:bg-secondary/50">
            <div className="grid size-11 place-items-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="size-5" />
            </div>
            <h3 className="mt-5 text-[19px]" style={{ fontWeight: 700 }}>
              {f.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
