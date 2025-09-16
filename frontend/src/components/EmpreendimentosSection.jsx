import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'
import LazyImage from './LazyImage'
import carolinaImage from '../assets/empreendimento_carolina_caliari.jpeg'
import homeImage from '../assets/empreendimento_home_experience.jpeg'
import chiabaiImage from '../assets/empreendimento_chiabai_martins.jpeg'
import decastroImage from '../assets/empreendimento_de_castro.jpeg'

const EmpreendimentosSection = () => {
  const empreendimentos = [
    {
      id: 1,
      nome: 'BACUTIA',
      subtitulo: 'UM LUGAR DE PAZ',
      status: 'LANÇAMENTO',
      statusColor: 'bg-yellow-500',
      borderColor: 'border-yellow-500',
      image: '/images/bacutia/003.webp',
      link: '/bacutia'
    },
    {
      id: 2,
      nome: 'CAROLINA CALIARI',
      subtitulo: 'RESIDENCIAL CLUBE',
      status: 'CONCLUÍDO',
      statusColor: 'bg-blue-600',
      borderColor: 'border-blue-600',
      image: carolinaImage,
      link: '/carolina-caliari'
    },
    {
      id: 3,
      nome: 'Home',
      subtitulo: 'EXPERIENCE',
      status: '100% VENDIDO',
      status2: 'EM CONSTRUÇÃO',
      statusColor: 'bg-blue-500',
      borderColor: 'border-blue-500',
      image: homeImage,
      link: '/home-experience'
    },
    {
      id: 4,
      nome: 'CHIABAI MARTINS',
      subtitulo: 'RESIDENCIAL',
      status: '100% VENDIDO',
      status2: '100% FINALIZADO',
      statusColor: 'bg-orange-500',
      borderColor: 'border-orange-500',
      image: chiabaiImage,
      link: '/chiabai-martins'
    },
    {
      id: 5,
      nome: 'DE CASTRO',
      subtitulo: 'CONSTRUTORA',
      status: 'NOVO PROJETO',
      statusColor: 'bg-purple-500',
      borderColor: 'border-purple-500',
      image: decastroImage,
      link: '/de-castro'
    }
  ]

  return (
    <section id="empreendimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
              EMPREENDIMENTOS
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {empreendimentos.map((emp, index) => (
            <AnimatedSection 
              key={emp.id} 
              animation="fade-up" 
              delay={index * 100}
            >
              <Link to={emp.link}>
                <Card 
                  className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 ${emp.borderColor} border-4 group cursor-pointer transform hover:-translate-y-2`}
                >
                  <div className="relative">
                    <LazyImage 
                      src={emp.image} 
                      alt={emp.nome}
                      className="w-full h-64 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Status badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <span className={`${emp.statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold block w-fit animate-pulse`}>
                        {emp.status}
                      </span>
                      {emp.status2 && (
                        <span className={`${emp.statusColor} text-white px-3 py-1 rounded-full text-sm font-semibold block w-fit animate-pulse`}>
                          {emp.status2}
                        </span>
                      )}
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-1">{emp.nome}</h3>
                      <p className="text-sm opacity-90">{emp.subtitulo}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center">
            <Link to="/empreendimentos">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                VER TODOS
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default EmpreendimentosSection

