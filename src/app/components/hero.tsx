import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[12px] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Introducing Lumen 4 — now with realtime AI
        </div>

        <h1
          className="mx-auto max-w-3xl text-balance text-[44px] leading-[1.05] md:text-[76px]"
          style={{ fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          The workspace that thinks
          <span className="block bg-gradient-to-r from-primary to-[#5ac8fa] bg-clip-text text-transparent">
            as fast as you do.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[18px] leading-relaxed text-muted-foreground md:text-[21px]">
          Lumen brings your docs, tasks, and data into one beautifully calm surface —
          designed to disappear so your ideas can take the stage.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="group h-12 rounded-full px-7 text-[15px]">
            Start free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="h-12 rounded-full px-6 text-[15px] text-primary hover:bg-primary/5"
          >
            Watch the film
          </Button>
        </div>
        <p className="mt-4 text-[13px] text-muted-foreground">
          Free for 14 days · No credit card required
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[24px] border border-border bg-secondary shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&h=1200&fit=crop&auto=format"
            alt="Lumen dashboard interface showing analytics and tasks"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}
