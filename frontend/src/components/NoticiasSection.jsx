import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight } from 'lucide-react'
import einsteinImage from '../assets/noticia_einstein_conecta.jpeg'
import criancasImage from '../assets/noticia_criancas_longe_telas.jpeg'

const NoticiasSection = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Construtora de Vila Velha fecha parceria com Einstein Conecta",
      resumo: "Com a parceria, os serviços de tele consulta estarão disponíveis para todos os clientes. Desde o início da pandemia, tem crescido bastante a demanda por serviços de telemedicina.",
      fonte: "www.folhavitoria.com.br",
      data: "15 de Janeiro, 2024",
      image: einsteinImage,
      categoria: "Parcerias"
    },
    {
      id: 2,
      titulo: "Construtora capixaba investe em parcerias para manter crianças longe de telas",
      resumo: "O objetivo, segundo o gerente da Construtora De Castro, é tirar o foco das crianças na tecnologia e proporcionar momentos de lazer e aprendizado.",
      fonte: "www.folhavitoria.com.br",
      data: "08 de Janeiro, 2024",
      image: criancasImage,
      categoria: "Responsabilidade Social"
    }
  ]

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            ÚLTIMAS NOTÍCIAS
          </h2>
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            TODAS AS NOTÍCIAS
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {noticias.map((noticia, index) => (
            <Card 
              key={noticia.id} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer ${
                index === 0 ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
            >
              <div className="relative">
                <img 
                  src={noticia.image} 
                  alt={noticia.titulo}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    index === 0 ? 'h-64' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {noticia.categoria}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {noticia.data}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {noticia.titulo}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {noticia.resumo}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Fonte: {noticia.fonte}
                  </span>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 p-0"
                  >
                    Leia Mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-gray-600 mb-6">
              Receba as últimas notícias e lançamentos da De Castro Construtora
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoticiasSection

