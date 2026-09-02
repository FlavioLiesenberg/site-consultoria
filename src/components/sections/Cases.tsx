import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { cases } from "@/data/content";

export function Cases() {
  return (
    <section id="casos" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Casos</span>
          <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl leading-[1.15]">
            {cases.title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {cases.subtitle}
          </p>
        </Reveal>

        {/* Linha 1: Cards de Casos Práticos */}
        <div className="mt-16 grid gap-6 lg:gap-8 lg:grid-cols-3">
          {cases.items.map((item, i) => (
            <Reveal key={item.headline} delay={i * 90}>
              <Card className="h-full border-border bg-card/40 transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.1)] rounded-2xl">
                <CardContent className="flex h-full flex-col p-7">
                  
                  {/* Ícone reduzido para acompanhar a escala da Metodologia */}
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand mb-5">
                    <item.icon className="size-5" />
                  </span>
                  
                  <p className="text-sm font-bold tracking-[0.16em] text-brand uppercase">
                    {item.sector}
                  </p>
                  
                  <h3 className="mt-3 text-xl leading-snug font-bold text-balance text-foreground">
                    {item.headline}
                  </h3>
                  
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {item.result}
                  </p>
                  
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Linha 2: Depoimentos */}
        <div className="mt-6 lg:mt-8 grid gap-6 lg:gap-8 lg:grid-cols-3">
          {cases.testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 90}>
              <figure className="surface-panel h-full rounded-2xl border border-border bg-surface/30 p-7 transition-colors hover:bg-surface/50">
                
                <Quote className="size-5 text-brand/40" />
                
                <blockquote className="mt-5 text-sm md:text-base leading-relaxed text-foreground italic">
                  “{t.quote}”
                </blockquote>
                
                <figcaption className="mt-6 border-t border-border/50 pt-4 text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">{t.author}</span> — {t.role}
                </figcaption>
                
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}