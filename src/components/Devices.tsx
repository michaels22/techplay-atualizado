import { Card, CardContent } from "@/components/ui/card";
import smartTv from "@/assets/smart-tv.jpg";
import smartphone from "@/assets/smartphone.jpg";
import laptop from "@/assets/laptop.jpg";
import fireStick from "@/assets/fire-stick.jpg";
import smartTvIcon from "@/assets/smart-tv-icon.jpg";
import fireStickIcon from "@/assets/fire-stick-icon.jpg";
import laptopIcon from "@/assets/laptop-icon.jpg";
import tvBoxIcon from "@/assets/tv-box-icon.jpg";
import smartphoneIcon from "@/assets/smartphone-icon.jpg";

const Devices = () => {
  const devices = [
    {
      image: smartTv,
      title: "Smart TV",
      description: "Assista diretamente na sua Smart TV"
    },
    {
      image: smartTv,
      title: "TV Box",
      description: "Compatível com todos os TV Box"
    },
    {
      image: smartphone,
      title: "Celular",
      description: "Android e iPhone"
    },
    {
      image: laptop,
      title: "Computador",
      description: "Windows, Mac e Linux"
    },
    {
      image: fireStick,
      title: "Fire Stick",
      description: "Amazon Fire TV Stick"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-12 overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              <span className="whitespace-nowrap">Assista em qualquer</span><br />
              <span className="whitespace-nowrap">Dispositivo</span>
            </h3>
            
            <div className="max-w-5xl mx-auto">
              {/* Primeira linha - 3 dispositivos */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 justify-items-center">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-lg">
                    <img src="/lovable-uploads/f747fe39-445f-4928-bcc4-8fe76b39cf1f.png" alt="Smart TV" className="w-12 h-12 object-contain rounded-xl" />
                  </div>
                  <h5 className="text-white font-bold text-sm">Smart TV</h5>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-lg">
                    <img src="/lovable-uploads/f747fe39-445f-4928-bcc4-8fe76b39cf1f.png" alt="TV Box" className="w-12 h-12 object-contain rounded-xl" />
                  </div>
                  <h5 className="text-white font-bold text-sm">TV Box</h5>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-lg">
                    <img src="/lovable-uploads/fa1df6b7-3727-44c0-9615-31c4faceed43.png" alt="Celular" className="w-12 h-12 object-contain rounded-xl" />
                  </div>
                  <h5 className="text-white font-bold text-sm">Celular</h5>
                </div>
              </div>
              
              {/* Segunda linha - 2 dispositivos centralizados */}
              <div className="flex justify-center gap-8 md:gap-12">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-lg">
                    <img src="/lovable-uploads/ca8202ac-b95c-428e-be6d-a9fb7a992768.png" alt="Computador" className="w-12 h-12 object-contain rounded-xl" />
                  </div>
                  <h5 className="text-white font-bold text-sm">Computador</h5>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-lg">
                    <img src={fireStickIcon} alt="Fire Stick" className="w-12 h-12 object-contain rounded-xl" />
                  </div>
                  <h5 className="text-white font-bold text-sm">Fire Stick</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Configuração simples em menos de 2 minutos
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span className="text-primary text-xl">✓</span>
              <span>Instalação Gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-primary text-xl">✓</span>
              <span>Suporte Técnico</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-primary text-xl">✓</span>
              <span>Configuração Remota</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;