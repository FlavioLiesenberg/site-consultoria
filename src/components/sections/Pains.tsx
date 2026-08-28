import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { pains } from "@/data/content";

export function Pains() {
  return (
    <section id="dores" className="border-y border-border bg-surface/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Diagnóstico inicial</span>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">{pains.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{pains.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <Card className="group h-full border-border bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-warning/50">
                <CardContent className="p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg border border-warning/30 bg-warning/10 text-warning transition-colors group-hover:bg-warning/20">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
