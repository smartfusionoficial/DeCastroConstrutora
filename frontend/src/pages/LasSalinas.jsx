import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Home, Users, Car, Waves, Building, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'

const LasSalinas = () => {
  const caracteristicas = [
    { icon: <Waves className="h-6 w-6" />, texto: "Próximo à praia" },
    { icon: <Home className="h-6 w-6" />, texto: "02 suítes" },
    { icon: <Car className="h-6 w-6" />, texto: "Vagas de garagem para carro e moto" },
    { icon: <Building className="h-6 w-6" />, texto: "Lazer montado e mobiliado" },
    { icon: <Users className="h-6 w-6" />, texto: "Aquecimento solar para chuveiro" },
    { icon: <Home className="h-6 w-6" />, texto: "Splits em salas e quartos" }
  ]

  const lazerItens = [
    "Brinquedoteca", "Solarium", "Espaço Zen", "Deck Molhado", 
    "Playground", "Gazebo", "Redário", "Sauna", "Praça das Mães", 
    "Piscina Adulto/Infantil", "Churrasqueira", "Hidro", "Salão Gourmet"
  ]

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais informações sobre o empreendimento Las Salinas."
    const whatsappUrl = `https://wa.me/5527992784090?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src="/images/las-salinas/001.webp"
            alt="Las Salinas - Vista do mar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mb-6">
              <Badge className="bg-blue-600 text-white px-6 py-2 text-lg mb-4">
                100% Vendido
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                LAS SALINAS
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Residencial em Itaparica, Vila Velha
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={handleWhatsApp}
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Descrição */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Las Salinas Residencial
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Localizado em Coqueiral de Itaparica, Las Salinas Residencial tem tudo o que você espera para viver o que há de melhor em Vila Velha.
                  </p>
                  <p>
                    Com o mais charmoso espaço de lazer, o edifício é pra quem busca conforto, comodidade e qualidade de vida.
                  </p>
                  <p>
                    Fácil acesso ao comércio, a duas quadras da praia e à cinco minutos do Shopping Boulevard.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <LazyImage
                src="/images/las-salinas/002.webp"
                alt="Las Salinas - Descrição"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Características do Empreendimento
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <LazyImage
                src="/images/las-salinas/003.webp"
                alt="Las Salinas - Fachada do edifício"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-6">
                {caracteristicas.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                    <span className="text-lg text-gray-700">{item.texto}</span>
                  </div>
                ))}
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Diferenciais:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Monitoramento 24hrs</li>
                    <li>• Acabamento com alto padrão de qualidade</li>
                    <li>• Piso em porcelanato 60x60</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Área de Lazer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Área de Lazer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tudo o que você procura para sua família e seus amigos viverem momentos inesquecíveis e divertidos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="fade-up">
              <LazyImage
                src="/images/las-salinas/004.webp"
                alt="Las Salinas - Área de lazer"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {lazerItens.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 font-bold">+</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up">
            <LazyImage
              src="/images/las-salinas/005.webp"
              alt="Las Salinas - Churrasqueira"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Localização Privilegiada
              </h2>
              <div className="flex items-center justify-center space-x-2 text-lg text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Itaparica, Vila Velha - ES</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Coqueiral de Itaparica
                  </h3>
                  <p className="text-lg text-gray-600">
                    Localização estratégica com fácil acesso ao comércio, próximo à praia e ao Shopping Boulevard.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button 
                      size="lg" 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                      onClick={handleWhatsApp}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Falar Conosco
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LasSalinas
