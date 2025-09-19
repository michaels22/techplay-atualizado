import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "Qualidade e Estabilidade",
      description: "Tecnologia antitravamento e troca de canais instantânea."
    },
    {
      icon: <Headphones className="w-8 h-8 md:w-12 md:h-12 text-primary" />,
      title: "Suporte Rápido",
      description: "Atendimento humanizado via WhatsApp."
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-red-600">Tech Play?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Mais de 20.000 filmes, 6.000 séries e 2.000 canais ao vivo, incluindo conteúdo de Netflix, Disney+, HBO Max, Prime Video, Premiere, SportTV, ESPN e muito mais!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">+20.000</div>
              <div className="text-muted-foreground">Filmes</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">+6.000</div>
              <div className="text-muted-foreground">Séries</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">+2.000</div>
              <div className="text-muted-foreground">Canais ao Vivo</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">4K/HD</div>
              <div className="text-muted-foreground">Qualidade</div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/723fa966-addb-4f54-8e97-b0eb28c3cd64.png" 
              alt="Canais disponíveis - Netflix, HBO Max, Disney+, ESPN e muito mais" 
              className="max-w-4xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border border-border hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-8 h-8 md:w-12 md:h-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;