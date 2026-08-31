import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { cases } from "@/data/content";

export function Cases() {
  return (
    <section id="casos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Casos</span>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">{cases.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{cases.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.items.map((item, i) => (
            <Reveal key={item.headline} delay={i * 90}>
              <Card className="h-full border-border bg-card/70 transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="flex h-full flex-col p-7">
                  <item.icon className="size-5 text-brand" />
                  <p className="mt-5 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {item.sector}
                  </p>
                  <h3 className="mt-3 text-xl leading-snug font-semibold text-balance">
                    {item.headline}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.result}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {cases.testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 90}>
              <figure className="surface-panel h-full rounded-xl p-7">
                <Quote className="size-5 text-brand" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.author}</span> — {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
