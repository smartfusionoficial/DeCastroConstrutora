import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Download, MapPin, Car, Home, Users, Shield, Smartphone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'
import homeExpImage from '../assets/empreendimento_home_experience.jpeg'

const HomeExperience = () => {
  const amenidades = [
    { icon: '🍽️', title: 'Espaço gourmet' },
    { icon: '🔒', title: 'Sistema de segurança via App' },
    { icon: '🤝', title: 'Parceiros Brainy Service' },
    { icon: '🔥', title: 'Churrasqueiras' },
    { icon: '🎮', title: 'Salão de Jogos' },
    { icon: '😌', title: 'Espaço Relax' },
    { icon: '🍕', title: 'Churrasqueira e Forno de Pizza' },
    { icon: '🏊', title: 'Piscina Adulto' },
    { icon: '🔥', title: 'Praça do Luau' },
    { icon: '☀️', title: 'Solário' }
  ]

  const diferenciais = [
    { icon: '📱', title: 'Acesso ao prédio e aptos 100% Digital' },
    { icon: '📊', title: 'Channel Manager' },
    { icon: '🔇', title: 'Isolamento acústico da janela dos quartos' },
    { icon: '❄️', title: 'Tubulação para splits nos quartos e sala' },
    { icon: '☀️', title: 'Aquecimento solar para chuveiros' },
    { icon: '🔌', title: 'Tomadas USB nas áreas comuns, nos quartos e na sala' },
    { icon: '📶', title: 'Wi-fi nas áreas comuns' },
    { icon: '🏠', title: 'Automação residencial instalada' }
  ]

  const obraStatus = [
    { etapa: 'Fundação', progresso: 100 },
    { etapa: 'Estrutura', progresso: 95 },
    { etapa: 'Alvenaria', progresso: 90 },
    { etapa: 'Instalações', progresso: 15 },
    { etapa: 'Revestimento', progresso: 20 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeExpImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Badge 100% Vendido */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <Badge className="bg-red-600 text-white text-lg px-6 py-2 animate-pulse">
            100% VENDIDO
          </Badge>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <AnimatedSection animation="fade-up">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      Home<br />
                      <span className="text-purple-400">Experience</span>
                    </h1>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Baixe o Material Completo
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contate-nos via WhatsApp
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Descrição Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                UM NOVO JEITO DE MORAR EM VILA VELHA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Home Experience nasce com o propósito de valorizar ainda mais o seu tempo em Vila Velha. 
                Um empreendimento residencial com uma plataforma com tecnologia e sem burocracia. 
                Oferecendo a liberdade de morar pelo tempo que quiser com a facilidade de poucos cliques.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Especificações */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Localização</h3>
                  <p className="text-gray-600">Praia de Itaparica, Vila Velha</p>
                  <p className="text-sm text-gray-500 mt-1">Rod. do Sol, 4116</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Car className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Garagem</h3>
                  <p className="text-gray-600">1 ou 2 vagas de garagem</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Home className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Apartamentos</h3>
                  <p className="text-gray-600">1 ou 2 quartos</p>
                  <p className="text-sm text-gray-500 mt-1">42m² a 57m²</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Pavimentos</h3>
                  <p className="text-gray-600">16 Pavimentos</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Segurança</h3>
                  <p className="text-gray-600">Monitoramento 24h/dia</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Tecnologia</h3>
                  <p className="text-gray-600">Plataforma digital completa</p>
                </CardContent>
              </Card>
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
                Área de Lazer Exclusiva
              </h2>
              <p className="text-lg text-gray-600">Montada e mobiliada para seu conforto</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenidades.map((amenidade, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-4">
                    <div className="text-4xl mb-3">{amenidade.icon}</div>
                    <p className="text-sm font-medium text-gray-700">{amenidade.title}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Diferenciais Tecnológicos
              </h2>
              <p className="text-lg text-gray-600">Inovação e praticidade em cada detalhe</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{diferencial.icon}</div>
                      <p className="font-medium text-gray-700">{diferencial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Estágio da Obra */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Estágio da Obra
              </h2>
              <p className="text-lg text-gray-600">Acompanhe o progresso da construção</p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {obraStatus.map((etapa, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{etapa.etapa}</h3>
                    <span className="text-lg font-bold text-purple-600">{etapa.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${etapa.progresso}%` }}
                    ></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <div className="mb-8">
              <Badge className="bg-red-600 text-white text-lg px-6 py-2 mb-6">
                100% VENDIDO
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empreendimento Esgotado
              </h2>
              <p className="text-xl mb-8">
                Mas temos outras oportunidades incríveis para você!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Ver Outros Empreendimentos
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Consultor
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default HomeExperience

