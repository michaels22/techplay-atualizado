
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Monitor, Rocket } from "lucide-react";
import carlosSilva from "@/assets/carlos-silva-real.jpg";
import mariaSantos from "@/assets/maria-santos-real.jpg";
import joaoOliveira from "@/assets/joao-oliveira-real.jpg";
import anaCosta from "@/assets/ana-costa-real.jpg";
import pedroLima from "@/assets/pedro-lima-real.jpg";
import luciaFerreira from "@/assets/lucia-ferreira-real.jpg";

const Pricing = () => {
  const plans = [
    {
      name: "Mensal",
      options: [
        {
          screens: 1,
          price: "R$ 29,90",
          period: "/mês",
          description: "Ideal para testar nosso serviço"
        },
        {
          screens: 2,
          price: "R$ 44,90",
          period: "/mês",
          description: "Ideal para testar nosso serviço"
        }
      ],
      popular: false,
      features: [
        "Acesso completo ao catálogo",
        "Suporte via WhatsApp",
        "Sem fidelidade",
        "Configuração gratuita"
      ]
    },
    {
      name: "Trimestral",
      options: [
        {
          screens: 1,
          price: "R$ 74,90",
          period: "/3 meses",
          description: "Melhor custo-benefício"
        },
        {
          screens: 2,
          price: "R$ 119,90",
          period: "/3 meses",
          description: "Melhor custo-benefício"
        }
      ],
      popular: true,
      features: [
        "Acesso completo ao catálogo",
        "Suporte via WhatsApp",
        "Sem fidelidade",
        "Configuração gratuita",
        "R$ 15,00 de desconto"
      ]
    },
    {
      name: "Anual",
      options: [
        {
          screens: 1,
          price: "R$ 279,90",
          period: "/12 meses",
          description: "Máximo desconto"
        },
        {
          screens: 2,
          price: "R$ 459,90",
          period: "/12 meses",
          description: "Máximo desconto"
        }
      ],
      popular: false,
      features: [
        "Acesso completo ao catálogo",
        "Suporte via WhatsApp",
        "Sem fidelidade",
        "Configuração gratuita",
        "R$ 80,00 de desconto"
      ]
    }
  ];

  return (
    <section id="planos" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Escolha seu <span className="text-red-600">plano ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem fidelidade. Cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-gradient-card border-border hover:shadow-elevated transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-2 text-sm font-semibold">
                    MAIS POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                
                <Tabs defaultValue="1" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="1" className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      1 Tela
                    </TabsTrigger>
                    <TabsTrigger value="2" className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      2 Telas
                    </TabsTrigger>
                  </TabsList>
                  
                  {plan.options.map((option, optionIndex) => (
                    <TabsContent key={optionIndex} value={option.screens.toString()} className="space-y-4">
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-foreground">{option.price}</span>
                        <span className="text-muted-foreground">{option.period}</span>
                      </div>
                      <p className="text-muted-foreground">{option.description}</p>
                      
                      <ul className="space-y-3 mb-6 text-left">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                        <li className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground font-bold">
                            {option.screens} {option.screens === 1 ? 'tela simultânea' : 'telas simultâneas'}
                          </span>
                        </li>
                      </ul>

                      <Button 
                        className={`w-full py-6 text-lg font-semibold ${
                          plan.popular 
                            ? 'bg-gradient-primary hover:opacity-90 text-white' 
                            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                        }`}
                        onClick={() => {
                          const message = `Olá! Quero assinar o plano ${plan.name} - ${option.screens} ${option.screens === 1 ? 'tela' : 'telas'} por ${option.price}${option.period}. Como posso fazer o pagamento e quando fica pronto?`;
          window.open(`https://wa.me/5583921461789?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                      >
                        ASSINAR AGORA
                      </Button>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            {/* Suporte Personalizado via WhatsApp */}
            <div className="mb-12 p-6 md:p-8 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-2xl">
              <div className="text-center">
                <div className="flex flex-col items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground text-center leading-tight">
                    Suporte<br />
                    Personalizado via<br />
                    WhatsApp
                  </h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                  Após escolher seu plano, você será redirecionado diretamente para nosso{" "}
                  <span className="text-green-400 font-semibold">WhatsApp oficial</span> onde nossa equipe especializada irá te auxiliar com o
                  pagamento e configuração do seu acesso.
                </p>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <div className="flex items-center gap-2 text-green-400">
                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">Atendimento humano especializado</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">Processo 100% seguro</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Depoimentos de Clientes */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
                O que nossos clientes dizem
              </h3>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Mais de 3.000 famílias satisfeitas em todo o Brasil
              </p>
              
              {/* Grid de Depoimentos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Depoimento 1 */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-base leading-relaxed">
                    "Instalação rápida e o melhor catálogo que já usei. Qualidade excepcional e nunca trava. Recomendo muito!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={carlosSilva} alt="Carlos Silva" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Carlos Silva</p>
                      <p className="text-gray-400 text-sm">São Paulo, SP</p>
                    </div>
                  </div>
                </div>

                {/* Depoimento 2 */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-base leading-relaxed">
                    "Estou usando na minha Smart TV e zero problemas. O catálogo é completo e o suporte é excelente."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={mariaSantos} alt="Maria Santos" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Maria Santos</p>
                      <p className="text-gray-400 text-sm">Rio de Janeiro, RJ</p>
                    </div>
                  </div>
                </div>

                {/* Depoimento 3 */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-base leading-relaxed">
                    "Instalação rápida via WhatsApp e instalação gratuita. Vale cada centavo!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={joaoOliveira} alt="João Oliveira" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">João Oliveira</p>
                      <p className="text-gray-400 text-sm">Brasília, DF</p>
                    </div>
                  </div>
                </div>

                {/* Depoimento 4 */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-base leading-relaxed">
                    "Cancelei Netflix e outras plataformas. Tech Play tem tudo que preciso por um preço justo."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={anaCosta} alt="Ana Costa" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ana Costa</p>
                      <p className="text-gray-400 text-sm">Belo Horizonte, MG</p>
                    </div>
                  </div>
                </div>

                {/* Depoimento 5 */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-base leading-relaxed">
                    "Qualidade 4K perfeita e todos os jogos do meu time. Não troco por nada!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={pedroLima} alt="Pedro Lima" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Pedro Lima</p>
                      <p className="text-gray-400 text-sm">Fortaleza, CE</p>
                    </div>
                  </div>
                </div>

                {/* Depoimento 6 */}
                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 mb-6 text-base leading-relaxed">
                    "Atendimento rápido via WhatsApp e instalação gratuita. Serviço nota 10!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={luciaFerreira} alt="Lucia Ferreira" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Lucia Ferreira</p>
                      <p className="text-gray-400 text-sm">Porto Alegre, RS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Summary */}
              <div className="flex justify-center">
                <div className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-3 font-semibold">
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.9/5 estrelas</span>
                  <span>•</span>
                  <span>+2.240 avaliações</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Teste Imediato</h3>
                <p className="text-muted-foreground">Liberado em menos de 5 minutos</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sem Compromisso</h3>
                <p className="text-muted-foreground">Cancele quando quiser</p>
              </div>
              
              <div className="col-span-2 md:col-span-1 text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Qualidade Premium</h3>
                <p className="text-muted-foreground">Experimente toda nossa tecnologia</p>
              </div>
            </div>
            
            {/* Botão Solicitar Teste Agora */}
            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg font-bold"
                onClick={() => {
                  const message = `Olá! Quero fazer o teste GRÁTIS da Tech Play agora! Quero ver todo o catálogo (+20.000 filmes, +6.000 séries, +2.000 canais) antes de escolher meu plano. Como funciona?`;
                  window.open(`https://wa.me/5583921461789?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                SOLICITAR TESTE AGORA
              </Button>
              <p className="text-muted-foreground mt-3">Resposta em menos de 2 minutos via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
