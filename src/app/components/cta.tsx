import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-black px-8 py-20 text-center text-white md:py-28">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-[#5ac8fa]/20 blur-[120px]" />
        <div className="relative">
          <h2
            className="mx-auto max-w-2xl text-[36px] leading-[1.05] md:text-[56px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Ready to work in the clear?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[18px] text-white/60">
            Join 40,000+ teams who made the switch to a calmer, faster workspace.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group h-12 rounded-full bg-white px-7 text-[15px] text-black hover:bg-white/90">
              Start free
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-6 text-[15px] text-white hover:bg-white/10"
            >
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
