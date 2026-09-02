import { AlertTriangle, PieChart, TrendingDown, CreditCard } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const painsData = {
  eyebrow: "Diagnóstico Inicial",
  title: "Sua empresa está presa em algum destes ciclos?",
  subtitle: "Quando o caixa aperta, o problema raramente é falta de faturamento — é não ter clareza total de onde cada real seu está indo parar.",
  items: [
    {
      icon: AlertTriangle,
      title: "Caixa apertado mesmo faturando alto",
      description: "O volume de vendas cresce, mas o dinheiro nunca sobra na conta. Você trabalha muito e no fim do mês está sempre no zero a zero."
    },
    {
      icon: PieChart, 
      title: "Dúvida na precificação",
      description: "Sem saber o custo real de cada venda, vender mais pode significar acumular mais prejuízo, sem você entender o porquê."
    },
    {
      icon: TrendingDown,
      title: "Inadimplência alta e falta de previsibilidade",
      description: "O dinheiro das vendas fica preso com o cliente ao mesmo tempo que as suas contas não param de chegar."
    },
    {
      icon: CreditCard,
      title: "Dependência de empréstimos e cheque especial",
      description: "A dívida rola mês após mês, os juros corroem todo o seu lucro e o mês começa já no vermelho, antes mesmo de abrir a porta."
    }
  ]
};

export function Pains() {
  return (
    <section 
      id="dores" 
      className="relative border-y border-border bg-surface/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        <Reveal>
          <div className="max-w-3xl mb-14 lg:mb-20">
            <p className="eyebrow mb-4">{painsData.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.15] mb-6">
              {painsData.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {painsData.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {painsData.items.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-background border border-border rounded-2xl p-8 hover:border-emerald/40 transition-all duration-300 h-full flex flex-col group">
                  
                  <div className="w-14 h-14 rounded-xl bg-surface/50 border border-border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-amber" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mt-auto">
                    {item.description}
                  </p>
                  
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}