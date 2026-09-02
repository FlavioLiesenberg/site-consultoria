import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { solutions } from "@/data/content";

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Soluções e serviços</span>
          <h2 className="mt-4 text-4xl font-bold text-balance md:text-5xl leading-[1.15]">
            {solutions.title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {solutions.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-16">
          <Tabs defaultValue={solutions.items[0]!.id} className="w-full">
            {/* Menu de Abas Aumentado */}
            <TabsList className="grid h-auto w-full grid-cols-1 gap-2 bg-surface/60 p-2 sm:grid-cols-2 lg:grid-cols-4 rounded-xl">
              {solutions.items.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="flex items-center gap-3 px-4 py-3.5 text-sm md:text-base font-semibold data-[state=active]:bg-brand data-[state=active]:text-primary-foreground rounded-lg transition-all"
                >
                  <item.icon className="size-5" />
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Conteúdo das Abas Aumentado */}
            {solutions.items.map((item) => (
              <TabsContent key={item.id} value={item.id} className="mt-8">
                <div className="surface-panel grid gap-12 rounded-3xl p-8 lg:grid-cols-2 lg:p-12 border border-border bg-surface/30">
                  <div>
                    <span className="inline-flex size-14 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                      <item.icon className="size-7" />
                    </span>
                    <h3 className="mt-8 text-3xl md:text-4xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base font-semibold tracking-wide text-brand uppercase">
                      {item.tagline}
                    </p>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <Button variant="hero" size="lg" className="mt-8 h-14 px-8 text-base font-bold" asChild>
                      <a href="#contato">Falar sobre esta solução</a>
                    </Button>
                  </div>

                  {/* Lista de Entregáveis Escalonada */}
                  <ul className="grid content-start gap-4">
                    {item.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-4 rounded-xl border border-border bg-background/60 px-5 py-4 hover:border-brand/50 transition-colors"
                      >
                        <Check className="size-5 shrink-0 text-brand" />
                        <span className="text-base font-medium text-foreground/90">{d}</span>
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