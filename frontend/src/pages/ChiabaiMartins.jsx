import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Home, Users, Car, Shield, Wifi, Waves, Utensils, Gamepad2, Dumbbell } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'
import chiabaiImage from '../assets/empreendimento_chiabai_martins.jpeg'

const ChiabaiMartins = () => {
  const especificacoes = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      titulo: 'Localização',
      info: 'Praia de Itaparica, Vila Velha/ES'
    },
    {
      icon: <Car className="h-6 w-6 text-blue-600" />,
      titulo: 'Garagem',
      info: '1 ou 2 vagas de garagem'
    },
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      titulo: 'Apartamentos',
      info: '2 e 3 quartos'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      titulo: 'Unidades',
      info: 'Empreendimento finalizado'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      titulo: 'Segurança',
      info: 'Monitoramento 24h/dia'
    },
    {
      icon: <Wifi className="h-6 w-6 text-blue-600" />,
      titulo: 'Conectividade',
      info: 'Wi-fi nas áreas comuns'
    }
  ]

  const lazer = [
    { icon: <Waves className="h-8 w-8 text-blue-600" />, nome: 'Piscina Adulto e Infantil' },
    { icon: <Utensils className="h-8 w-8 text-blue-600" />, nome: 'Espaço Gourmet' },
    { icon: <Gamepad2 className="h-8 w-8 text-blue-600" />, nome: 'Salão de Jogos' },
    { icon: <Dumbbell className="h-8 w-8 text-blue-600" />, nome: 'Academia' },
    { icon: <Users className="h-8 w-8 text-blue-600" />, nome: 'Salão de Festas' },
    { icon: <Car className="h-8 w-8 text-blue-600" />, nome: 'Garagem Coberta' }
  ]

  const diferenciais = [
    { titulo: 'Localização Privilegiada', descricao: 'Próximo à praia de Itaparica, uma das mais belas de Vila Velha' },
    { titulo: 'Acabamento Premium', descricao: 'Materiais de primeira qualidade em todos os ambientes' },
    { titulo: 'Área de Lazer Completa', descricao: 'Espaços pensados para toda a família se divertir' },
    { titulo: 'Segurança Total', descricao: 'Sistema de monitoramento 24 horas e portaria' },
    { titulo: 'Investimento Seguro', descricao: 'Empreendimento 100% vendido e finalizado' },
    { titulo: 'Infraestrutura Completa', descricao: 'Próximo a comércios, escolas e serviços' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${chiabaiImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <div className="mb-6">
              <Badge className="bg-red-500 text-white px-6 py-2 text-lg font-semibold mb-4">
                100% VENDIDO - 100% FINALIZADO
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              CHIABAI<br />
              MARTINS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              RESIDENCIAL
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Ver Outros Empreendimentos
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5527988296965', '_blank')}
              >
                Contate-nos via WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre o Empreendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                EMPREENDIMENTO CONCLUÍDO COM SUCESSO
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                O Chiabai Martins Residencial foi um marco na nossa trajetória. Localizado na privilegiada 
                Praia de Itaparica, o empreendimento ofereceu apartamentos de 2 e 3 quartos com área de 
                lazer completa e acabamento premium. Hoje, 100% vendido e finalizado, representa nossa 
                dedicação à qualidade e satisfação dos clientes.
              </p>
            </AnimatedSection>
          </div>

          {/* Especificações */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {especificacoes.map((spec, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      {spec.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {spec.titulo}
                    </h3>
                    <p className="text-gray-600">
                      {spec.info}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Área de Lazer */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Área de Lazer Completa
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Espaços pensados para proporcionar momentos únicos de convivência e diversão para toda a família.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lazer.map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.nome}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Diferenciais do Empreendimento
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Características que fizeram do Chiabai Martins um sucesso de vendas.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {diferencial.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {diferencial.descricao}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Localização Privilegiada
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <strong>Praia de Itaparica</strong> - Uma das praias mais belas e valorizadas de Vila Velha.
                  </p>
                  <p>
                    <strong>Infraestrutura Completa</strong> - Próximo a supermercados, farmácias, escolas e restaurantes.
                  </p>
                  <p>
                    <strong>Fácil Acesso</strong> - Conectado às principais vias da Grande Vitória.
                  </p>
                  <p>
                    <strong>Valorização</strong> - Região em constante crescimento e valorização imobiliária.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Mapa da Localização</p>
                    <p>Praia de Itaparica, Vila Velha/ES</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <div className="mb-8">
              <Badge className="bg-red-500 text-white px-6 py-3 text-lg font-semibold mb-6">
                EMPREENDIMENTO ESGOTADO
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mas Temos Outras Oportunidades Incríveis!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conheça nossos outros empreendimentos disponíveis e encontre o apartamento ideal para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Ver Outros Empreendimentos
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5527988296965', '_blank')}
              >
                Falar com Consultor
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default ChiabaiMartins

