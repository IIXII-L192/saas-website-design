import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-lg bg-foreground text-background text-[15px]">
            ◇
          </div>
          <span className="tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            Lumen
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">
            Sign in
          </a>
          <Button size="sm" className="rounded-full px-4">
            Get started
          </Button>
        </div>

        <button
          className="grid size-9 place-items-center rounded-full text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2 rounded-full">Get started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
