import { Check } from "lucide-react";
import { teamData } from "../../data/team"; 

export function About() {
  const members = teamData.members;

  if (!members || members.length === 0) return null;

  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="container px-4 mx-auto max-w-5xl">
        
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">{teamData.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {teamData.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative w-full max-w-[380px] h-[480px] lg:h-[550px] rounded-2xl overflow-hidden border border-border/50 hover:border-emerald/50 transition-all duration-500 shadow-lg cursor-pointer"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end">
                
                <div>
                  <p className="font-semibold text-xs mb-1.5 uppercase tracking-widest text-emerald">
                    Sócio & Consultor Executivo
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {member.role}
                  </p>
                </div>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="pt-4 mt-4 border-t border-white/10">
                      
                      <div className="space-y-2 mb-5 text-white/90 text-sm leading-relaxed">
                        {member.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                        {member.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-white/80">
                            <Check className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}