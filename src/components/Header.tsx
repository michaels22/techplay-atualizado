import { Button } from "@/components/ui/button";
import playIcon from "@/assets/play-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center p-2">
            <img src={playIcon} alt="Tech Play" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-bold text-foreground">Tech Play</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#inicio" 
            className="text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Início
          </a>
          <a 
            href="#planos" 
            className="text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('planos');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Planos
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            🌙
          </Button>
          <Button 
            className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6"
            onClick={() => {
              const message = `Olá! Gostaria de conhecer o teste grátis da Tech Play. Podem me ajudar?`;
              window.open(`https://wa.me/5583921461789?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            TESTE GRÁTIS
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;