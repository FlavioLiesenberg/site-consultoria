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
import { contactData } from "@/data/contact";
import { supabase } from "@/lib/supabase"; 

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  revenue: string;
  challenge: string;
};

const empty: FormState = { name: "", email: "", whatsapp: "", revenue: "", challenge: "" };

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const maskPhone = (value: string) => {
  let v = value.replace(/\D/g, "");
  if (v.length > 11) v = v.substring(0, 11);
  if (v.length > 2) v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
  if (v.length > 9) v = `${v.substring(0, 10)}-${v.substring(10)}`;
  return v;
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!isValidEmail(values.email)) {
      toast.error("Por favor, insira um e-mail corporativo válido.");
      return;
    }

    const phoneDigits = values.whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast.error("Insira um número de WhatsApp válido com DDD.");
      return;
    }
    
    if (!values.revenue || !values.challenge) {
      toast.error("Selecione o faturamento e o principal desafio.");
      return;
    }
    
    setSubmitting(true);

    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: values.name,
          email: values.email,
          whatsapp: values.whatsapp,
          revenue: values.revenue,
          challenge: values.challenge,
        }
      ]);

    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao enviar. Tente novamente ou chame no WhatsApp.");
      return;
    }

    setDone(true);
    setValues(empty);
    toast.success("Solicitação recebida com sucesso!");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          <Reveal>
            <div className="flex flex-col">
              <span className="eyebrow mb-4">{contactData.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                {contactData.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {contactData.subtitle}
              </p>

              <ul className="mt-8 space-y-4">
                {contactData.trustItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm md:text-base text-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-panel rounded-2xl p-6 lg:p-10 shadow-2xl">
              {done ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
                  <CheckCircle2 className="w-12 h-12 text-emerald mb-3" />
                  <h3 className="text-2xl font-bold text-foreground">Recebemos sua solicitação</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Nossa equipe entrará em contato em até 1 dia útil para agendar o Diagnóstico de Caixa.
                  </p>
                  <Button size="lg" className="h-12 px-6 text-base bg-emerald hover:bg-emerald/90 text-white" onClick={() => setDone(false)}>
                    Enviar outra solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 md:gap-6">
                  
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Nome completo</Label>
                    <Input
                      id="name"
                      required
                      className="h-12 text-sm md:text-base px-4 bg-background border-border focus:border-emerald"
                      placeholder="Seu nome"
                      value={values.name}
                      onChange={(e) => set("name")(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-sm font-semibold">E-mail corporativo</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="h-12 text-sm md:text-base px-4 bg-background border-border focus:border-emerald"
                        placeholder="nome@empresa.com.br"
                        value={values.email}
                        onChange={(e) => set("email")(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="whatsapp" className="text-sm font-semibold">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        required
                        type="tel"
                        maxLength={15}
                        className="h-12 text-sm md:text-base px-4 bg-background border-border focus:border-emerald"
                        placeholder="(11) 90000-0000"
                        value={values.whatsapp}
                        onChange={(e) => set("whatsapp")(maskPhone(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="revenue" className="text-sm font-semibold">Faturamento mensal</Label>
                      <Select value={values.revenue} onValueChange={set("revenue")}>
                        <SelectTrigger id="revenue" className="h-12 text-sm md:text-base px-4 bg-background border-border focus:border-emerald">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactData.revenueOptions.map((opt) => (
                            <SelectItem key={opt} value={opt} className="text-sm">
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="challenge" className="text-sm font-semibold">Principal desafio</Label>
                      <Select value={values.challenge} onValueChange={set("challenge")}>
                        <SelectTrigger id="challenge" className="h-12 text-sm md:text-base px-4 bg-background border-border focus:border-emerald">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactData.challengeOptions.map((opt) => (
                            <SelectItem key={opt} value={opt} className="text-sm">
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={submitting}
                      className="w-full h-14 bg-emerald hover:bg-emerald/90 text-white font-bold text-base md:text-lg transition-all"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          {contactData.form.submitButton}
                          <Send className="w-5 h-5 ml-3" />
                        </>
                      )}
                    </Button>
                    
                    <div className="mt-4 flex items-start gap-2 px-1">
                      <Lock className="w-4 h-4 shrink-0 text-muted-foreground mt-0.5" />
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {contactData.lgpd}
                      </p>
                    </div>
                  </div>

                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}