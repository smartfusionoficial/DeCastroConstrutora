import { Button } from '@/components/ui/button'
import { MapPin, Sun, Waves, Building } from 'lucide-react'
import vilaVelhaImage from '../assets/secao_vila_velha_nova.webp'

const VilaVelhaSection = () => {
  const motivos = [
    {
      icon: <MapPin className="h-8 w-8" />,
      titulo: "Localização Privilegiada",
      descricao: "Município mais antigo do Espírito Santo"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      titulo: "Praias Paradisíacas",
      descricao: "Acesso direto às melhores praias do ES"
    },
    {
      icon: <Building className="h-8 w-8" />,
      titulo: "Infraestrutura Completa",
      descricao: "Comércio, serviços e lazer"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      titulo: "Qualidade de Vida",
      descricao: "Clima tropical e ambiente familiar"
    }
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={vilaVelhaImage} 
                alt="Vista aérea de Vila Velha"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
              Cidade Histórica
            </div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              MOTIVOS PARA VIVER EM VILA VELHA/ES
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Vila Velha é o município mais antigo do ES. Sim, tudo começou aqui. 
              Então temos muita história para te contar. Venha!
            </p>
            
            {/* Motivos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {motivos.map((motivo, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 flex-shrink-0">
                    {motivo.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {motivo.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {motivo.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              CLIQUE AQUI
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VilaVelhaSection

