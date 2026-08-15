import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Showcase() {
  return (
    <section id="showcase" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] uppercase tracking-[0.16em] text-[#5ac8fa]" style={{ fontWeight: 600 }}>
            Designed to focus
          </p>
          <h2
            className="mt-4 text-[38px] leading-[1.05] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Less interface.
            <br />
            <span className="text-white/50">More you.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[18px] leading-relaxed text-white/60">
            A deep, distraction-free canvas with adaptive typography and true dark mode —
            crafted for hours of comfortable, deliberate work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:col-span-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1400&h=900&fit=crop&auto=format"
              alt="Team collaborating in Lumen"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8">
            <div>
              <div className="text-[52px] leading-none" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                50ms
              </div>
              <p className="mt-3 text-[15px] text-white/60">
                Median response time across every surface, worldwide.
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-[52px] leading-none" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>
                99.99%
              </div>
              <p className="mt-3 text-[15px] text-white/60">Uptime, backed by our enterprise SLA.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
