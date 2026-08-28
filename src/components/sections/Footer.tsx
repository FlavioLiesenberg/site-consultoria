import { Mail, MapPin, TrendingUp } from "lucide-react";
import { footer, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md bg-[image:var(--gradient-emerald)] text-primary-foreground">
                <TrendingUp className="size-5" />
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.22em]">
                L2 ACADEMY
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Consultoria sênior em Reestruturação Financeira (Turnaround) e CFO as a Service.
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-emerald" />
                {site.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-emerald" />
                {site.city}
              </p>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold tracking-[0.16em] text-foreground uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-emerald"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Confidencialidade:</span>{" "}
            {footer.confidentiality}
          </p>
          <p>
            <span className="font-semibold text-foreground">LGPD:</span> {footer.lgpd}
          </p>
          <p className="pt-2">{footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
