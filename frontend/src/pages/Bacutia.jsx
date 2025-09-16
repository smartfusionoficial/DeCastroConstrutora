import React from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Car, Wifi, Shield, Zap, Droplets, Sun, Leaf, Phone, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import LazyImage from '../components/LazyImage';

const Bacutia = () => {
  const amenidades = [
    { nome: "Game Spot", descricao: "Área de jogos com equipamentos de ponta", icone: "🎮" },
    { nome: "Mini Boliche", descricao: "Diversão para toda a família", icone: "🎳" },
    { nome: "Lan House", descricao: "Um olho no descanso e o outro na tela", icone: "💻" },
    { nome: "Cine Kids", descricao: "Para os pequenos cinéfilos", icone: "🎬" },
    { nome: "Kids Retro", descricao: "Pra tirar a garotada do celular", icone: "🕹️" },
    { nome: "Academia", descricao: "Se ainda você tiver energia e coragem", icone: "💪" },
    { nome: "Bike Sharing", descricao: "Para quem gosta de pedalar", icone: "🚴" },
    { nome: "Piscina", descricao: "Uma generosa piscina para curtição", icone: "🏊" },
    { nome: "Sky Bar", descricao: "Depois da praia, piscina com futebol", icone: "🍹" },
    { nome: "Deck Praia", descricao: "Oooô sol, vê se não esquece", icone: "☀️" },
    { nome: "Chopperia", descricao: "Pra que motorista da rodada?", icone: "🍺" },
    { nome: "Sport Bar", descricao: "Aquela resenha com os amigos", icone: "📺" },
    { nome: "Beach Point", descricao: "Material extra pra melhorar a praia", icone: "🏖️" },
    { nome: "Coworking", descricao: "Xô daqui trabalho, mas se precisar", icone: "💼" },
    { nome: "Pet Care", descricao: "Para aqueles que falam como bebê", icone: "🐕" },
    { nome: "Cold Box", descricao: "Armários refrigerados individuais", icone: "❄️" },
    { nome: "Delivery Box", descricao: "Mais privacidade e segurança", icone: "📦" },
    { nome: "Espaço Recharge", descricao: "O que não vai te faltar é energia", icone: "🔋" },
  ];

  const areasVip = [
    { nome: "Bacutia", descricao: "Espaço exclusivo com churrasqueira e piscina privativa" },
    { nome: "Peracanga", descricao: "Área gourmet exclusiva para momentos especiais" },
    { nome: "Setiba", descricao: "Local de descanso privativo com vista privilegiada" },
    { nome: "Namorados", descricao: "Espaço romântico para casais" },
    { nome: "Morro", descricao: "Vista panorâmica em ambiente reservado" },
    { nome: "Areia Preta", descricao: "Ambiente sofisticado e exclusivo" },
  ];

  const diferenciais = [
    { icone: <Wifi className="w-6 h-6" />, titulo: "Wi-fi Completo", descricao: "Internet de alta velocidade em todos os espaços" },
    { icone: <Shield className="w-6 h-6" />, titulo: "Segurança 24h", descricao: "Sistema de monitoramento por vídeo" },
    { icone: <Zap className="w-6 h-6" />, titulo: "Fechadura Digital", descricao: "Acesso por senha nos apartamentos" },
    { icone: <Car className="w-6 h-6" />, titulo: "Carros Elétricos", descricao: "Preparação para veículos elétricos" },
    { icone: <Droplets className="w-6 h-6" />, titulo: "Captação de Chuva", descricao: "Sistema sustentável de reuso de água" },
    { icone: <Sun className="w-6 h-6" />, titulo: "Aquecimento Solar", descricao: "Energia renovável para chuveiros" },
    { icone: <Leaf className="w-6 h-6" />, titulo: "Coleta Seletiva", descricao: "Preparação para sustentabilidade" },
  ];

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais informações sobre o empreendimento Bacutia - um lugar de paz!";
    const phone = "5527306269650";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <LazyImage
          src="/images/bacutia/003.webp"
          alt="Home Bacutia - Fachada"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="mb-6">
              <LazyImage
                src="/images/bacutia/001.webp"
                alt="Logo Bacutia"
                className="w-32 h-32 mx-auto mb-6 object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              BACUTIA
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light italic">
              um lugar de paz!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              >
                Ver Plantas
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conceito Section */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Um Conceito Baseado na Paz</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Em 1983 durante a guerra do Líbano uma <strong>abordagem pela paz baseada no cérebro</strong> 
                  resultou em mais dezenas de estudos científicos ao redor do mundo onde a ciência buscou 
                  uma ferramenta para combater o grande inimigo que tem feito perdermos cada vez mais nossa 
                  consciência individual e coletiva: <strong>o estresse</strong>.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Em nosso mundo onde o normal é vivermos estressados em um ciclo vicioso e cumulativo, 
                  sem perceber, temos nos tornado uma sociedade cada vez mais adoecida pelos muitos 
                  estímulos neurais vindos da tecnologia.
                </p>
                <p className="text-xl font-semibold text-blue-600 mb-4">
                  Qual será a nossa escolha?
                </p>
                <p className="text-lg text-gray-800 font-medium">
                  Família Home Bacutia, Um lugar de paz!
                </p>
              </div>
              <div>
                <LazyImage
                  src="/images/bacutia/002.webp"
                  alt="Conceito Bacutia"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Localização */}
      <AnimatedSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Localização Privilegiada</h2>
              <p className="text-xl text-gray-600">Praia da Bacutia, Guarapari/ES</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <LazyImage
                  src="/images/bacutia/004.webp"
                  alt="Fachada Home Bacutia"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Alameda das Gaivotas, 21</h3>
                    <p className="text-gray-600">
                      Localizado em uma das mais valorizadas e cobiçadas regiões do Espírito Santo, 
                      próximo às praias de Guaibura, Peracanga e Padres.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-blue-800">Por que fazer um Home aqui?</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Um dos mais valorizados e cobiçados paraísos do Espírito Santo terá um 
                    empreendimento assertivo na estruturação para locação de temporada com 
                    gestão hoteleira inédita na região mais luxuosa do ES.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Diferenciais Tecnológicos */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Tecnologia e Sustentabilidade</h2>
              <p className="text-xl text-gray-600">Inovação em cada detalhe</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {diferenciais.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {item.icone}
                    </div>
                    <h3 className="font-semibold mb-2">{item.titulo}</h3>
                    <p className="text-sm text-gray-600">{item.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Áreas de Lazer */}
      <AnimatedSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 px-4 py-2 text-lg">
                30 itens de lazer e serviços
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Para seu descanso ser completo e em paz
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <LazyImage
                  src="/images/bacutia/011.webp"
                  alt="Planta das áreas de lazer"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {amenidades.slice(0, 8).map((amenidade, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-3xl mb-2">{amenidade.icone}</div>
                    <h4 className="font-semibold text-sm mb-1">{amenidade.nome}</h4>
                    <p className="text-xs text-gray-600">{amenidade.descricao}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Spot */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <LazyImage
                src="/images/bacutia/012.webp"
                alt="Game Spot"
                className="w-full rounded-lg shadow-lg"
              />
              <LazyImage
                src="/images/bacutia/013.webp"
                alt="Game Spot Interior"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Mini Boliche e Lan House */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <LazyImage
                src="/images/bacutia/014.webp"
                alt="Mini Boliche"
                className="w-full rounded-lg shadow-lg"
              />
              <LazyImage
                src="/images/bacutia/015.webp"
                alt="Lan House"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Áreas VIP */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">6 Áreas VIP Exclusivas</h2>
              <p className="text-xl text-gray-300">
                O que tem de diferente nesse lazer?
              </p>
              <p className="text-lg text-gray-400 mt-4 max-w-4xl mx-auto">
                6 áreas vips com muita exclusividade: Churrasqueira, área gourmet, local de descanso 
                e uma piscina exclusiva só pra você, família e amigos curtirem. Aquecidas no inverno 
                e refrescante no verão as piscinas e os espaços serão restritos aos que reservarem.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {areasVip.map((area, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">{area.nome}</h3>
                    <p className="text-gray-300">{area.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Imagens das Áreas VIP */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <LazyImage
                src="/images/bacutia/043.webp"
                alt="Área VIP Areia Preta"
                className="w-full rounded-lg shadow-lg"
              />
              <LazyImage
                src="/images/bacutia/044.webp"
                alt="Área VIP Morro"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <LazyImage
                src="/images/bacutia/045.webp"
                alt="Área VIP Namorados"
                className="w-full rounded-lg shadow-lg"
              />
              <LazyImage
                src="/images/bacutia/046.webp"
                alt="Área VIP Setiba"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Espaço Recharge */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-green-50">
          <div className="max-w-6xl mx-auto text-center">
            <LazyImage
              src="/images/bacutia/042.webp"
              alt="Espaço Recharge"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Espaço Recharge</h2>
            <p className="text-xl text-gray-600">O que não vai te faltar aqui é energia</p>
            <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
              Preparação completa para veículos elétricos com estações de carregamento modernas 
              e sustentáveis, pensando no futuro da mobilidade urbana.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Tipos de Unidades */}
      <AnimatedSection>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Tipos de Unidades</h2>
              <p className="text-xl text-gray-600">Studios modernos e funcionais</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Studio 1A</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Área privativa:</strong> 12,69m² a 20,11m²</p>
                    <p><strong>Varanda:</strong> Inclusa</p>
                    <p><strong>Box privativo:</strong> Sim</p>
                    <p><strong>Ideal para:</strong> Investimento em locação</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Studio 1B</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Área privativa:</strong> 16,22m² a 18,16m²</p>
                    <p><strong>Varanda:</strong> Inclusa</p>
                    <p><strong>Box privativo:</strong> Sim</p>
                    <p><strong>Ideal para:</strong> Temporada familiar</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Studios</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Área privativa:</strong> 14,03m² a 17,54m²</p>
                    <p><strong>Varanda:</strong> Inclusa</p>
                    <p><strong>Box privativo:</strong> Sim</p>
                    <p><strong>Ideal para:</strong> Uso próprio e locação</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gestão Hoteleira */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Gestão Hoteleira Inteligente</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Maximização de Diária</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Sistema de gestão hoteleira inédita na região mais luxuosa do ES. Formatamos o 
                  empreendimento para que exclusividade, conforto e facilidade sejam os marcos 
                  de nossos momentos de lazer.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Gestão profissional especializada
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Maximização de receita através de tecnologia
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Serviços pay per use para comodidade
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Redução de custos operacionais
                  </li>
                </ul>
              </div>
              <div>
                <LazyImage
                  src="/images/bacutia/005.webp"
                  alt="Hall de entrada"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Final */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Mais que prédios, um propósito!</h2>
            <p className="text-xl mb-8 text-gray-300">
              Nossa escolha está em produzir um empreendimento com uma mensagem de paz por trás do luxo material, 
              nosso esforço é pra darmos algo além do concreto!
            </p>
            <p className="text-2xl font-semibold mb-8 text-yellow-400">
              Vamos juntos provocar a paz?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero saber mais
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Visita
              </Button>
            </div>
            <p className="text-lg mt-8 text-gray-400">
              Paz a todos nós! - Família De Castro Construtora
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Bacutia;

