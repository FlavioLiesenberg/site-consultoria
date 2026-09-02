import { MessageCircle } from "lucide-react";
import { heroData } from "../../data/hero";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-background flex flex-col justify-between overflow-hidden pt-32 lg:pt-48">
      
      {/* Vídeo de Fundo (Alinhado à direita com degradê para a esquerda - Sintaxe Tailwind v4) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.jpg"
          className="absolute right-0 top-0 w-full lg:w-[65%] h-full object-cover object-center lg:object-right opacity-40 lg:opacity-80"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Máscaras de transição atualizadas para bg-linear-to-* */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent lg:hidden" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-background to-transparent" />
      </div>

      {/* Bloco de Texto Principal */}
      <div className="container relative z-10 px-4 mx-auto flex-1 flex flex-col justify-center">
        <div className="max-w-2xl mt-12 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            {heroData.headline}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
            {heroData.subheadline}
          </p>

          <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors w-full sm:w-auto cursor-pointer">
            <MessageCircle className="w-5 h-5" />
            <span>{heroData.primaryCta}</span>
          </button>

          <p className="text-sm text-foreground/60 mt-4 max-w-md">
            {heroData.disclaimer}
          </p>
        </div>
      </div>

      {/* Cards de Métricas Ancorados na Base */}
      <div className="relative z-10 container px-4 mx-auto pb-0 mt-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {heroData.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-surface/90 backdrop-blur-md border border-border/50 border-b-0 rounded-t-3xl p-6 lg:p-8 pb-10 transition-transform hover:-translate-y-2"
            >
              <h4 className="text-amber text-3xl lg:text-4xl font-bold mb-3">
                {metric.value}
              </h4>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}