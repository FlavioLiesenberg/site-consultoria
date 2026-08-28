import { useState } from "react";
import { CheckCircle2, Loader2, Lock, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/Reveal";
import { form } from "@/data/content";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  revenue: string;
  challenge: string;
};

const empty: FormState = { name: "", email: "", whatsapp: "", revenue: "", challenge: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.revenue || !values.challenge) {
      toast.error("Selecione o faturamento e o principal desafio.");
      return;
    }
    setSubmitting(true);
    // Integração de backend/CRM pode ser conectada aqui.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setDone(true);
    setValues(empty);
    toast.success("Solicitação enviada. Retornamos em até 1 dia útil.");
  };

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="eyebrow">Diagnóstico estratégico</span>
          <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl">{form.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{form.subtitle}</p>

          <ul className="mt-8 space-y-3">
            {form.trust.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-emerald" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-surface/50 p-4">
            <Lock className="mt-0.5 size-4 shrink-0 text-teal" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Seus dados são utilizados apenas para contato comercial e qualificação, conforme a
              LGPD. Nenhuma informação é compartilhada com terceiros.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-panel rounded-2xl p-7 lg:p-9">
            {done ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <CheckCircle2 className="size-10 text-emerald" />
                <h3 className="text-2xl font-semibold">Recebemos sua solicitação</h3>
                <p className="text-muted-foreground">
                  Nossa equipe entrará em contato em até 1 dia útil para agendar o Diagnóstico de
                  Caixa.
                </p>
                <Button variant="executive" size="lg" onClick={() => setDone(false)}>
                  Enviar outra solicitação
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={values.name}
                    onChange={(e) => set("name")(e.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="nome@empresa.com.br"
                      value={values.email}
                      onChange={(e) => set("email")(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(11) 90000-0000"
                      value={values.whatsapp}
                      onChange={(e) => set("whatsapp")(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="revenue">Faturamento mensal</Label>
                    <Select value={values.revenue} onValueChange={set("revenue")}>
                      <SelectTrigger id="revenue">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {form.revenueOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="challenge">Principal desafio</Label>
                    <Select value={values.challenge} onValueChange={set("challenge")}>
                      <SelectTrigger id="challenge">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {form.challengeOptions.map((o) => (
                          <SelectItem key={o.value} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="xl" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      {form.submitLabel}
                      <Send className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
