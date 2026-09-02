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

// Função para validar formato de e-mail básico
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Função para aplicar máscara de telefone (BR)
const maskPhone = (value: string) => {
  let v = value.replace(/\D/g, ""); // Remove tudo que não for dígito
  if (v.length > 11) v = v.substring(0, 11); // Limita a 11 dígitos
  if (v.length > 2) v = `(${v.substring(0, 2)}) ${v.substring(2)}`; // Adiciona DDD
  if (v.length > 9) v = `${v.substring(0, 10)}-${v.substring(10)}`; // Adiciona o traço
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
    
    // 1. Validação de E-mail
    if (!isValidEmail(values.email)) {
      toast.error("Por favor, insira um e-mail corporativo válido.");
      return;
    }

    // 2. Validação de Telefone (deve ter no mínimo 10 dígitos: 2 DDD + 8 ou 9 do número)
    const phoneDigits = values.whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast.error("Insira um número de WhatsApp válido com DDD.");
      return;
    }
    
    // 3. Validação dos Selects
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                {contactData.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {contactData.subtitle}
              </p>

              <ul className="mt-10 space-y-5">
                {contactData.trustItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-base md:text-xl text-foreground/90">
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-emerald shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-panel rounded-2xl p-8 lg:p-12 shadow-2xl">
              {done ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald mb-4" />
                  <h3 className="text-3xl font-bold text-foreground">Recebemos sua solicitação</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Nossa equipe entrará em contato em até 1 dia útil para agendar o Diagnóstico de Caixa.
                  </p>
                  <Button size="lg" className="h-14 px-8 text-lg bg-emerald hover:bg-emerald/90 text-white" onClick={() => setDone(false)}>
                    Enviar outra solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6 md:gap-8">
                  
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="text-base font-semibold">Nome completo</Label>
                    <Input
                      id="name"
                      required
                      className="h-14 text-base md:text-lg px-5 bg-background border-border focus:border-emerald"
                      placeholder="Seu nome"
                      value={values.name}
                      onChange={(e) => set("name")(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
                    <div className="grid gap-3">
                      <Label htmlFor="email" className="text-base font-semibold">E-mail corporativo</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="h-14 text-base md:text-lg px-5 bg-background border-border focus:border-emerald"
                        placeholder="nome@empresa.com.br"
                        value={values.email}
                        onChange={(e) => set("email")(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="whatsapp" className="text-base font-semibold">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        required
                        type="tel"
                        maxLength={15}
                        className="h-14 text-base md:text-lg px-5 bg-background border-border focus:border-emerald"
                        placeholder="(11) 90000-0000"
                        value={values.whatsapp}
                        // Aplica a máscara diretamente no evento de digitação
                        onChange={(e) => set("whatsapp")(maskPhone(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
                    <div className="grid gap-3">
                      <Label htmlFor="revenue" className="text-base font-semibold">Faturamento mensal</Label>
                      <Select value={values.revenue} onValueChange={set("revenue")}>
                        <SelectTrigger id="revenue" className="h-14 text-base md:text-lg px-5 bg-background border-border focus:border-emerald">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactData.revenueOptions.map((opt) => (
                            <SelectItem key={opt} value={opt} className="text-base">
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="challenge" className="text-base font-semibold">Principal desafio</Label>
                      <Select value={values.challenge} onValueChange={set("challenge")}>
                        <SelectTrigger id="challenge" className="h-14 text-base md:text-lg px-5 bg-background border-border focus:border-emerald">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactData.challengeOptions.map((opt) => (
                            <SelectItem key={opt} value={opt} className="text-base">
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
                      className="w-full h-16 bg-emerald hover:bg-emerald/90 text-white font-bold text-lg md:text-xl transition-all"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                          Processando...
                        </>
                      ) : (
                        <>
                          {contactData.form.submitButton}
                          <Send className="w-6 h-6 ml-3" />
                        </>
                      )}
                    </Button>
                    
                    <div className="mt-5 flex items-start gap-3 px-2">
                      <Lock className="w-5 h-5 shrink-0 text-muted-foreground mt-0.5" />
                      <p className="text-sm leading-relaxed text-muted-foreground">
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