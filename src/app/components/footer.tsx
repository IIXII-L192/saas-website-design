const groups = [
  { title: "Product", links: ["Overview", "Features", "Pricing", "Changelog", "Download"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "API", "Community", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="grid size-7 place-items-center rounded-lg bg-foreground text-background text-[15px]">
                ◇
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Lumen</span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted-foreground">
              The calm, fast, intelligent workspace for modern teams.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[13px]" style={{ fontWeight: 600 }}>
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-[13px] text-muted-foreground">© 2026 IIXII™ & Aakarsh Singhal. All rights reserved. (This is just a template, not a real service)</p>
          <p className="text-[13px] text-muted-foreground">Designed in California.</p>
        </div>
      </div>
    </footer>
  );
}
