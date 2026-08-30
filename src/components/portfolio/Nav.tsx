import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { navItems, profile } from "./data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-40 hidden h-screen w-[230px] flex-col justify-between border-r border-border/60 bg-background/90 px-4 py-5 backdrop-blur-md lg:flex ${
          scrolled ? "shadow-[0_0_20px_rgba(0,0,0,0.18)]" : ""
        }`}
      >
        <div>
          <a href="#home" className="flex items-center gap-2 pb-8 text-xl font-semibold tracking-tight text-foreground">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            <span className="neon-text">{profile.name}</span>
          </a>

          <nav aria-label="Main navigation" className="space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-md px-1 py-1.5 text-[14px] font-medium tracking-tight text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </aside>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
