import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-red-600">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Hero Image - Responsive */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/8ed634f9-5a3e-4e47-915f-0da6a31c23c7.png" 
          alt="Deadpool Tech Play - Muito+ Economia e Qualidade"
          className="h-full w-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Text positioned at Deadpool's belt level */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4" style={{ top: '60%' }}>
        <Button 
          variant="outline"
          size="sm" 
          className="border-white text-white hover:bg-white hover:text-black font-bold px-4 py-2 text-sm md:text-lg md:px-8 md:py-4"
          onClick={() => {
            const message = `Olá! Quero assinar a Tech Play agora! Tenho interesse nos planos disponíveis: Mensal (R$ 29,90 - 1 tela | R$ 44,90 - 2 telas), Trimestral (R$ 74,90 - 1 tela | R$ 119,90 - 2 telas) ou Anual (R$ 279,90 - 1 tela | R$ 459,90 - 2 telas). Podem me ajudar?`;
            window.open(`https://wa.me/5583921461789?text=${encodeURIComponent(message)}`, '_blank');
          }}
        >
          ASSINE AGORA
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg"
          onClick={() => {
            const element = document.getElementById('planos');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          VER PLANOS
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          

        </div>
      </div>

    </section>
  );
};

export default Hero;