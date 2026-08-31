import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { solutions } from "@/data/content";

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Soluções e serviços</span>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            {solutions.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{solutions.subtitle}</p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Tabs defaultValue={solutions.items[0]!.id} className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-1 gap-1 bg-surface/60 p-1.5 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.items.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="flex items-center gap-2 px-3 py-2.5 text-[0.8rem] font-medium data-[state=active]:bg-brand data-[state=active]:text-primary-foreground"
                >
                  <item.icon className="size-4" />
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.items.map((item) => (
              <TabsContent key={item.id} value={item.id} className="mt-6">
                <div className="surface-panel grid gap-10 rounded-2xl p-7 lg:grid-cols-2 lg:p-10">
                  <div>
                    <span className="inline-flex size-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                      <item.icon className="size-6" />
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-brand">{item.tagline}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
                    <Button variant="hero" size="lg" className="mt-7" asChild>
                      <a href="#contato">Falar sobre esta solução</a>
                    </Button>
                  </div>

                  <ul className="grid content-start gap-3">
                    {item.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 rounded-lg border border-border bg-background/40 px-4 py-3.5"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                        <span className="text-sm text-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
