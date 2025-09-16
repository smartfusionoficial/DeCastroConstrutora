import { Button } from '@/components/ui/button'
import institucionalImage from '../assets/secao_institucional_predio_moderno.jpeg'

const InstitucionalSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              DE CASTRO MAIS QUE PRÉDIOS, UM PROPÓSITO
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa história começou com um pai muito trabalhador e de família muito humilde que 
              começou a vida bem novo com o sonho de empreender.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Mais de 30 anos de experiência no mercado imobiliário
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Compromisso com a qualidade e satisfação dos clientes
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600">
                  Inovação e sustentabilidade em cada projeto
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              SAIBA MAIS
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={institucionalImage} 
                alt="Prédio moderno De Castro"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-green-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">30+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstitucionalSection

