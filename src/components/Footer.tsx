import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-8 py-3"
            onClick={() => {
              const message = `Olá! Gostaria de mais informações sobre a Tech Play!`;
              window.open(`https://wa.me/5583921461789?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </Button>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Tech Play. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;