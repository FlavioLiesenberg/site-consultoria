import { Reveal } from "@/components/Reveal";
import { methodology } from "@/data/content";

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative border-y border-border bg-surface/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Metodologia</span>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            {methodology.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{methodology.subtitle}</p>
        </Reveal>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-[linear-gradient(to_right,transparent,var(--border-strong),transparent)] lg:block"
            aria-hidden
          />
          {methodology.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110}>
              <li className="relative h-full list-none">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-emerald/40 bg-background text-emerald">
                  <step.icon className="size-5" />
                </span>
                <div className="mt-6 rounded-xl border border-border bg-card/60 p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-emerald uppercase">
                    {step.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {step.duration}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
