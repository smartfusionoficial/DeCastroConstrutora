import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Home, Users } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'
import carolinaImage from '../assets/empreendimento_carolina_caliari.jpeg'
import homeExpImage from '../assets/empreendimento_home_experience.jpeg'
import chiabaiImage from '../assets/empreendimento_chiabai_martins.jpeg'
import decastroImage from '../assets/empreendimento_de_castro.jpeg'

const Empreendimentos = () => {
  const empreendimentos = [
    {
      id: 1,
      nome: 'Bacutia',
      subtitulo: 'Um Lugar de Paz',
      descricao: 'Empreendimento baseado na filosofia de paz e bem-estar, com gestão hoteleira para locação de temporada.',
      localizacao: 'Praia da Bacutia, Guarapari/ES',
      quartos: 'Studios de 12m² a 20m²',
      unidades: '30 itens de lazer',
      status: 'Lançamento',
      statusColor: 'bg-yellow-500',
      image: '/images/bacutia/003.webp',
      link: '/bacutia'
    },
    {
      id: 2,
      nome: 'Carolina Caliari',
      subtitulo: 'Residencial Clube',
      descricao: 'Localizado no coração de Itapoã, em Vila Velha. Para quem quer viver perto de tudo e viver bem.',
      localizacao: 'Itapoã, Vila Velha/ES',
      quartos: '3 quartos com até 3 suítes',
      unidades: '98 unidades',
      status: 'Concluído',
      statusColor: 'bg-blue-600',
      image: carolinaImage,
      link: '/carolina-caliari'
    },
    {
      id: 3,
      nome: 'Home Experience',
      subtitulo: 'Residencial Tecnológico',
      descricao: 'Um novo jeito de morar em Vila Velha com plataforma tecnológica e sem burocracia.',
      localizacao: 'Praia de Itaparica, Vila Velha',
      quartos: '1 ou 2 quartos',
      unidades: '16 pavimentos',
      status: '100% Vendido',
      statusColor: 'bg-red-500',
      image: homeExpImage,
      link: '/home-experience'
    },
    {
      id: 4,
      nome: 'Chiabai Martins',
      subtitulo: 'Residencial',
      descricao: 'Empreendimento completo com área de lazer exclusiva e localização privilegiada.',
      localizacao: 'Praia de Itaparica, Vila Velha',
      quartos: '2 e 3 quartos',
      unidades: 'Finalizado',
      status: '100% Vendido',
      statusColor: 'bg-red-500',
      image: chiabaiImage,
      link: '/chiabai-martins'
    },
    {
      id: 5,
      nome: 'De Castro',
      subtitulo: 'Construtora',
      descricao: 'Novo projeto em desenvolvimento. Em breve mais informações sobre este lançamento.',
      localizacao: 'Vila Velha/ES',
      quartos: 'A definir',
      unidades: 'Em planejamento',
      status: 'Novo Projeto',
      statusColor: 'bg-blue-500',
      image: decastroImage,
      link: '/de-castro'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empreendimentos
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Conheça nossos projetos exclusivos em Vila Velha, cada um pensado para oferecer 
                o melhor em qualidade de vida e inovação.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lista de Empreendimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {empreendimentos.map((emp, index) => (
              <AnimatedSection key={emp.id} animation="fade-up" delay={index * 200}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="relative">
                    <LazyImage
                      src={emp.image}
                      alt={emp.nome}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${emp.statusColor} text-white px-4 py-2 text-sm font-semibold`}>
                        {emp.status}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {emp.nome}
                      </h2>
                      <p className="text-lg text-blue-600 font-medium mb-4">
                        {emp.subtitulo}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {emp.descricao}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                        <span>{emp.localizacao}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Home className="h-5 w-5 text-blue-600 mr-3" />
                        <span>{emp.quartos}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Users className="h-5 w-5 text-blue-600 mr-3" />
                        <span>{emp.unidades}</span>
                      </div>
                    </div>

                    <Link to={emp.link}>
                      <Button 
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300"
                      >
                        Saiba Mais
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Encontre o Empreendimento Ideal para Você
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudá-lo a encontrar o apartamento dos seus sonhos em Vila Velha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                >
                  Entre em Contato
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5527988296965', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Empreendimentos

