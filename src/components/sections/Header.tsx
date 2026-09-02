import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl py-1"
          : "border-b border-transparent py-2",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-5 lg:px-8">
        
        {/* ÁREA DA LOGO */}
        <a href="#top" className="group flex items-center gap-4 shrink-0" aria-label={site.brand}>
          <img
            src="/imagens/logo.png"
            alt="L2 Academy Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />

          <span className="leading-tight">
            <span className="block font-display text-base md:text-lg font-bold tracking-[0.2em] text-foreground">
              L2 ACADEMY
            </span>
            <span className="block text-[0.7rem] md:text-xs tracking-[0.14em] text-muted-foreground uppercase font-semibold">
              Consultoria Financeira e Reestruturação
            </span>
          </span>
        </a>

        {/* NAVEGAÇÃO DESKTOP (FONTES AUMENTADAS) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base lg:text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BOTÃO DESKTOP (ALTURA E FONTE AUMENTADAS) */}
        <div className="hidden lg:block">
          <Button variant="hero" size="lg" className="h-12 text-base font-bold px-6" asChild>
            <a href="#contato">Agendar Diagnóstico de Caixa</a>
          </Button>
        </div>

        {/* BOTÃO MENU MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* MENU MOBILE EXPANDIDO (FONTES AUMENTADAS) */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-4 h-14 text-lg font-bold" asChild>
              <a href="#contato" onClick={() => setOpen(false)}>
                Agendar Diagnóstico de Caixa
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}