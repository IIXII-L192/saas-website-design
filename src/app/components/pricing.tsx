import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Personal",
    monthly: 0,
    yearly: 0,
    tagline: "For individuals getting organized.",
    features: ["Up to 3 workspaces", "Unlimited docs", "Basic AI assist", "7-day history"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 12,
    yearly: 9,
    tagline: "For professionals who live in their tools.",
    features: [
      "Everything in Personal",
      "Unlimited workspaces",
      "Advanced AI & automations",
      "Live charts & dashboards",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    monthly: 22,
    yearly: 18,
    tagline: "For teams building together.",
    features: [
      "Everything in Pro",
      "Shared team spaces",
      "Roles & permissions",
      "SSO & SCIM",
      "SOC 2 & audit logs",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="text-center">
        <h2
          className="text-[34px] leading-[1.1] md:text-[48px]"
          style={{ fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Simple, honest pricing.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[18px] text-muted-foreground">
          Start free. Upgrade when it feels right. Cancel anytime.
        </p>

        <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
          {[
            { label: "Monthly", value: false },
            { label: "Yearly", value: true },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => setYearly(opt.value)}
              className={`rounded-full px-5 py-1.5 text-[13px] transition-colors ${
                yearly === opt.value
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt.label}
              {opt.value && <span className="ml-1.5 text-primary">−25%</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-8 transition-shadow ${
              p.highlighted
                ? "border-primary/30 bg-background shadow-[0_30px_80px_-40px_rgba(0,113,227,0.5)]"
                : "border-border bg-background hover:shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]"
            }`}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[11px] text-primary-foreground" style={{ fontWeight: 600 }}>
                Most popular
              </span>
            )}
            <h3 className="text-[20px]" style={{ fontWeight: 700 }}>
              {p.name}
            </h3>
            <p className="mt-1 text-[14px] text-muted-foreground">{p.tagline}</p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-[48px] leading-none" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                ${yearly ? p.yearly : p.monthly}
              </span>
              <span className="mb-1.5 text-[14px] text-muted-foreground">/ month</span>
            </div>

            <Button
              className={`mt-6 h-11 rounded-full ${p.highlighted ? "" : "bg-foreground text-background hover:bg-foreground/90"}`}
            >
              {p.cta}
            </Button>

            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
