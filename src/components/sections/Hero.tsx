import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { hero } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="hero-canvas relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--background),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-4xl">
          <span className="eyebrow inline-flex items-center gap-2">
            <ShieldCheck className="size-3.5" />
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
            Estancamos o <span className="text-gradient-emerald">sangramento de caixa</span> e
            devolvemos a previsibilidade financeira da sua empresa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button variant="hero" size="xl" asChild>
            <a href="#contato">
              {hero.primaryCta}
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant="executive" size="xl" asChild>
            <a href="#solucoes">{hero.secondaryCta}</a>
          </Button>
        </Reveal>

        <Reveal delay={200} className="mt-12">
          <div className="flex flex-wrap gap-3">
            {hero.badges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur"
              >
                <badge.icon className="size-4 text-brand" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280} className="mt-14">
          <dl className="surface-panel grid grid-cols-2 gap-px overflow-hidden rounded-xl lg:grid-cols-4">
            {hero.metrics.map((metric) => (
              <div key={metric.label} className="bg-surface/40 px-6 py-7">
                <dt className="text-2xl font-semibold text-brand lg:text-3xl">{metric.value}</dt>
                <dd className="mt-1.5 text-xs tracking-wide text-muted-foreground uppercase">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
