import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLeadForm } from "./lead-dialog";

const LINKS = [
  { label: "Metodologia", href: "#metodologia" },
  { label: "Cases", href: "#cases" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
];

export function SiteHeader() {
  const { open } = useLeadForm();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-18 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="R2Flow — início">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-base font-bold text-primary-foreground">
            R2
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">R2Flow</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="cta" size="sm" className="hidden sm:inline-flex" onClick={open}>
            Solicitar diagnóstico
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-ink px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Navegação mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-4 font-display text-lg"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button
            variant="cta"
            size="lg"
            className="mt-5 w-full"
            onClick={() => {
              setMobileOpen(false);
              open();
            }}
          >
            Solicitar diagnóstico
          </Button>
        </div>
      )}
    </header>
  );
}
