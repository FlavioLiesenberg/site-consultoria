import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { about } from "@/data/content";
import consultantPhoto from "@/assets/flavio-liesenberg.jpg";

export function About() {
  return (
    <section id="sobre" className="border-y border-border bg-surface/30 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl bg-[image:var(--gradient-emerald)] opacity-15 blur-2xl"
              aria-hidden
            />
            <img
              src={consultantPhoto}
              alt="Flávio Liesenberg, consultor sênior em reestruturação financeira"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative aspect-4/5 w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-elevated)]"
            />
            <div className="surface-panel absolute -bottom-6 left-4 right-4 rounded-xl px-5 py-4 sm:left-8 sm:right-auto">
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Interim CFO
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald">+20 anos em turnaround</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{about.name}</h2>
          <p className="mt-2 text-sm font-medium text-emerald">{about.role}</p>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald" />
                <span className="text-sm text-foreground">{h}</span>
              </li>
            ))}
          </ul>

          <Button variant="hero" size="lg" className="mt-9" asChild>
            <a href="#contato">Conversar com o consultor</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
