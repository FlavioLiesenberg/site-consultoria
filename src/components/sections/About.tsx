import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { teamData } from "../../data/team"; 
import { Button } from "../ui/button";

export function About() {
  const members = teamData.members;
  const [activeMemberId, setActiveMemberId] = useState(members[0]?.id || "");

  if (!members || members.length === 0) return null;

  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="container px-4 mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">{teamData.eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {teamData.title}
          </h2>
        </div>

        {/* Novo Modelo: Grid 50/50 Fixo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {members.map((member) => {
            const isActive = activeMemberId === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setActiveMemberId(member.id)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 border h-137.5 lg:h-162.5 flex flex-col justify-end ${
                  isActive ? "border-emerald shadow-[0_0_30px_rgba(16,185,129,0.1)]" : "border-border"
                }`}
              >
                {/* 
                  Imagem com proporção 100% estável:
                  Transição de Preto e Branco para Colorido, sem distorção.
                */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
                    isActive ? "scale-105 grayscale-0" : "scale-100 grayscale"
                  }`}
                  style={{
                    backgroundImage: `url(${member.image})`,
                  }}
                />

                {/* Máscara Escura: Fica mais intensa no active para leitura perfeita dos textos */}
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    isActive 
                      ? "bg-linear-to-t from-background via-background/95 to-background/20" 
                      : "bg-linear-to-t from-background via-background/50 to-transparent"
                  }`}
                />

                {/* Conteúdo de Textos */}
                <div className="relative z-10 p-6 lg:p-10 w-full flex flex-col justify-end">
                  
                  {/* Cabeçalho do Consultor (Sempre Visível) */}
                  <div className="mb-2">
                    <p className={`text-emerald font-semibold text-xs md:text-sm mb-1 uppercase tracking-widest transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
                      Sócio & Consultor Executivo
                    </p>
                    <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {member.role}
                    </p>
                  </div>

                  {/* Detalhes (Revelados no Hover) */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <div className="space-y-3 mb-6 text-foreground/90 text-sm md:text-base leading-relaxed">
                      {member.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {member.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-emerald mt-1 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#contato" className="block">
                      <Button className="bg-emerald hover:bg-emerald/90 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>Conversar com o consultor</span>
                      </Button>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}