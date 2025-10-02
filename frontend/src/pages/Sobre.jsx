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
                    Contar toda a trajetória da De Castro é falar de quase quatro décadas de dedicação à construção. Para isso, temos uma imagem que representa muito bem esse caminho, mas aqui vamos além do que ela mostra.
                  </p>
                  <p>
                    Tudo começou com o sonho do seu Enoque. De origem humilde, ele saiu de casa ainda muito jovem para trabalhar e sempre prezou pelo esforço e pelo trabalho digno. Foi auxiliar de pedreiro, faxineiro, office boy, auxiliar administrativo, corretor de imóveis, empresário e muito mais. Independentemente da função, nunca faltou dedicação.
                  </p>
                  <p>
                    Com o passar do tempo, vieram os prédios, os aprendizados e também a segunda geração. Em determinado momento, seu Enoque decidiu deixar a incorporação residencial e passou a se dedicar à construção de galpões industriais. Foi então que Leandro, seu filho mais novo, resolveu seguir os passos do pai. Ingressou na faculdade de Engenharia aos 16 anos e, desde 2007, conduz a De Castro Construtora no segmento residencial, mantendo viva a essência da família.
                  </p>
                  <p>
                    Somos reconhecidos não apenas pela nossa longa trajetória, mas, sobretudo, pelas superações que marcaram nossa história — principalmente pelo desafio constante de inovar. Sabia que cada um de nossos empreendimentos questiona e supera o que já fizemos antes? Se não for para trazer algo pioneiro para o mercado e para nós mesmos, simplesmente não lançamos. Inovar está em nosso DNA.
                  </p>
                  <p>
                    Estamos sempre aprendendo a crescer sem abrir mão desse DNA. Por isso, não espere grandeza em volume de empreendimentos, mas sim em inovação e consistência.
                  </p>
                  <p>
                    Nos últimos dez anos, um ponto passou a transformar ainda mais nossos projetos: as pesquisas de comportamento humano. Hoje, todos os nossos empreendimentos nascem também a partir de estudos sobre como as pessoas vivem e se relacionam, tentamos mostrar uma mensagem de como podemos ter mais consciência individual e coletiva. Dessa forma, sentimos que não construímos apenas prédios, mas algo maior e intangível, transformação em nós.
                  </p>
                  <p>
                    No meio da nossa caminhada, o propósito de compartilhar uma mensagem através dos nossos empreendimentos desafiando nossos comportamentos como sociedade e individualmente ecoou dentro de nós e entrou em nosso DNA.
                  </p>
                  <p>
                    Conscientes de que devemos materializar nosso propósito em nosso dia a dia, compartilhamos nossa vontade de superar tijolo. Nenhuma empresa é maior que o seu propósito, nosso desejo é que esse continue perpetuando não em uma instituição, mas dentro de todos nós.
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

      {/* História da Família */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                História da Família De Castro
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mais de 40 anos construindo sonhos e transformando vidas em Vila Velha.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              <LazyImage
                src="/historia-familia.png"
                alt="História da Família De Castro - Timeline de empreendimentos"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </AnimatedSection>
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
                onClick={() => window.open('https://wa.me/5527992784090', '_blank')}
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

