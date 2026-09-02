import { Reveal } from "@/components/Reveal";
import { methodology } from "@/data/content";

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative border-y border-border bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Metodologia</span>
          <h2 className="mt-4 text-4xl font-bold text-balance md:text-5xl leading-[1.15]">
            {methodology.title}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {methodology.subtitle}
          </p>
        </Reveal>

        <ol className="relative mt-16 lg:mt-20 grid gap-6 lg:gap-8 lg:grid-cols-4">
          {/* A linha conectora desceu ligeiramente (top-7) para ficar alinhada ao novo tamanho do ícone */}
          <div
            className="absolute top-7 right-0 left-0 hidden h-px bg-[linear-gradient(to_right,transparent,var(--border-strong),transparent)] lg:block"
            aria-hidden
          />
          
          {methodology.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110}>
              <li className="relative h-full list-none group">
                
                {/* Ícone Aumentado com Efeito Hover */}
                <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-brand/40 bg-background text-brand transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="size-6" />
                </span>
                
                {/* Card de Conteúdo Aumentado */}
                <div className="mt-6 h-[calc(100%-4rem)] rounded-2xl border border-border bg-background/50 p-8 transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-surface/50">
                  <p className="text-sm font-bold tracking-[0.16em] text-brand uppercase">
                    {step.step}
                  </p>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    {step.duration}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}