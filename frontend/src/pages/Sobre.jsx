import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Users, Award, Building, Heart } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'

const Sobre = () => {
  const timeline = [
    { ano: '1980', titulo: 'ED. JOÃO PESSOA', descricao: 'Praia de Itapoã, com lojas e apartamentos.' },
    { ano: '1981', titulo: 'CONDOMÍNIO DE CASAS', descricao: 'Praia da Costa, total de 6 casas.' },
    { ano: '1982', titulo: 'ED. NOSSA SENHORA DA PENHA', descricao: 'Centro de Vila Velha, com lojas e apartamentos.' },
    { ano: '1990', titulo: 'ED. MARIETH', descricao: 'Praia da Itapoã, apartamentos.' },
    { ano: '1993', titulo: 'ED. ULAN BATOR', descricao: 'Praia da Itapoã, apartamentos.' },
    { ano: '1996', titulo: 'RESIDENCIAL LONG BEACH', descricao: 'Praia da Itapoã, apartamentos.' },
    { ano: '2000', titulo: 'ED. GOLD COAST', descricao: 'Praia da Itapoã, apartamentos.' },
    { ano: '2000', titulo: 'ED. JACQUES LEBALEUR', descricao: 'Praia da Itapoã, apartamentos e lojas.' },
    { ano: '2001', titulo: '78 CASAS', descricao: 'Praia da Costa e Praia de Itapoã.' },
    { ano: '2002', titulo: 'ED. PAUL TORNIER', descricao: 'Praia da Itapoã, apartamentos e lojas.' },
    { ano: '2002', titulo: 'LA MANSION RESIDENCIAL', descricao: 'Praia da Itapoã, apartamentos.' },
    { ano: '2005', titulo: '4 GALPÕES', descricao: 'Distribuídos por Vila Velha, sendo 1 frigorífico.' },
    { ano: '2007', titulo: 'LEANDRO', descricao: 'Assume os negócios com 19 anos e o Sr. Enoque continuou desenvolvendo projetos industriais.' },
    { ano: '2010', titulo: 'ED. GOLD SUMMER', descricao: 'Praia da Itapoã, apartamentos e lojas.' },
    { ano: '2012', titulo: 'ED. CELEBRATE CENTER', descricao: 'Jardim Guadalajara, apartamentos e lojas.' },
    { ano: '2016', titulo: 'ED. LAS SALINAS', descricao: 'Praia de Itaparica, apartamentos e lojas.' },
    { ano: '2017', titulo: 'CHIABAI MARTINS RESIDENCIAL', descricao: 'Praia de Itaparica, apartamentos e lojas.' },
    { ano: '2018', titulo: 'ED. CAROLINA CALIARI', descricao: 'Praia de Itapoã, apartamentos.' },
    { ano: '2021', titulo: 'ED. HOME EXPERIENCE', descricao: 'Praia de Itaparica, apartamentos.' },
    { ano: 'HOJE', titulo: 'CONTINUAMOS', descricao: 'Com a missão de construir mais que prédios. Temos o propósito de construir relacionamentos.' }
  ]

  const valores = [
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      titulo: 'Compromisso',
      descricao: 'Mais de 40 anos de compromisso com a qualidade e satisfação dos nossos clientes.'
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      titulo: 'Excelência',
      descricao: 'Buscamos sempre a excelência em cada projeto, desde o planejamento até a entrega.'
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      titulo: 'Inovação',
      descricao: 'Incorporamos as mais modernas tecnologias e tendências do mercado imobiliário.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      titulo: 'Relacionamento',
      descricao: 'Construímos mais que prédios, construímos relacionamentos duradouros.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                DeCastro mais que prédios, um propósito
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Nossa história começou com um pai muito trabalhador e de família muito humilde 
                que começou a vida bem novo com o sonho de empreender.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Que Construtora é Essa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Que construtora é essa?
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Estamos cansados de ouvir essa pergunta.
                  </p>
                  <p>
                    E é por isso criamos um livro de bolso.
                  </p>
                  <p>
                    Contar toda a história da De Castro, o sobrenome da família, pode te entediar, 
                    pois são mais de 3 décadas construindo. Não daria para fazer isso em poucas páginas.
                  </p>
                  <p>
                    Pagar para um jornal fazer isso? Não! Pagar para alguém falar bem da gente? 
                    Definitivamente não.
                  </p>
                  <p>
                    Fazer 10 obras ao mesmo tempo para mostrar grandeza? Isso você encontra na 
                    história de grandes construtoras que já não estão mais no mercado.
                  </p>
                </div>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Baixar E-book
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      "QUE CONSTRUTORA É ESSA?"
                    </h3>
                    <p className="text-gray-600 mb-6">
                      O TIJOLO É O MESMO.<br />
                      O CIMENTO É O MESMO.<br />
                      A DIFERENÇA ESTÁ NO PROPÓSITO!
                    </p>
                    <div className="text-sm text-gray-500">
                      E-book disponível para download
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Os pilares que sustentam nossa trajetória de mais de 40 anos no mercado imobiliário.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-6 flex justify-center">
                      {valor.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {valor.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {valor.descricao}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossa Trajetória
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mais de 40 anos construindo sonhos e transformando vidas em Vila Velha.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {timeline.map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <div className="relative flex items-start mb-12">
                    {/* Ponto na timeline */}
                    <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Conteúdo */}
                    <div className="ml-20">
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-3">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                            {item.ano}
                          </span>
                          <h3 className="text-lg font-bold text-gray-800">
                            {item.titulo}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.descricao}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Conheça nossos empreendimentos e descubra como podemos construir o seu futuro juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar E-book
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/5527988296965', '_blank')}
              >
                Falar Conosco
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Sobre

