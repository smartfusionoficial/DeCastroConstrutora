import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'
import noticiaEinstein from '../assets/noticia_einstein_conecta.jpeg'
import noticiaCriancas from '../assets/noticia_criancas_longe_telas.jpeg'

const Noticias = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')
  const noticias = [
    {
      id: 1,
      titulo: 'Construtora de Vila Velha fecha parceria com Einstein Conecta',
      resumo: 'Com a parceria, os serviços de tele consulta estarão disponíveis para todos os clientes. Desde o início da pandemia, tem crescido bastante a demanda por serviços de telemedicina.',
      categoria: 'Parcerias',
      data: '15 de Janeiro, 2024',
      fonte: 'www.folhavitoria.com.br',
      imagem: noticiaEinstein,
      link: '/noticias/einstein-conecta',
      conteudo: `Fonte: www.folhavitoria.com.br Com a parceria, os serviços de tele consulta estarão disponíveis para todos os clientes. Desde o início da pandemia, tem crescido bastante a procura por serviços de telemedicina. Segundo um levantamento feito pela Saúde Digital Brasil, mais de 7,5 milhões de atendimentos nesta modalidade foram realizados no Brasil entre 2020 e 2021.

A Construtora De Castro, de Vila Velha, fechou uma parceria com a Einstein Conecta para oferecer serviços de telemedicina aos moradores de seus empreendimentos. A iniciativa visa proporcionar mais comodidade e segurança aos clientes, especialmente em tempos de pandemia.

O serviço estará disponível 24 horas por dia, 7 dias por semana, oferecendo consultas médicas online, orientações de saúde e acompanhamento médico remoto. Os moradores poderão acessar o serviço através de um aplicativo exclusivo.

"Estamos sempre buscando formas de agregar valor aos nossos empreendimentos e melhorar a qualidade de vida dos nossos clientes", afirma Leandro de Castro, diretor da construtora.`
    },
    {
      id: 2,
      titulo: 'Construtora capixaba investe em parcerias para manter crianças longe de telas',
      resumo: 'O objetivo, segundo o gerente da Construtora De Castro, é tirar o foco das crianças na tecnologia e proporcionar momentos de lazer e diversão em família.',
      categoria: 'Responsabilidade Social',
      data: '08 de Janeiro, 2024',
      fonte: 'www.folhavitoria.com.br',
      imagem: noticiaCriancas,
      link: '/noticias/criancas-longe-telas',
      conteudo: `Fonte: www.folhavitoria.com.br O objetivo, segundo o gerente da Construtora De Castro, é tirar o foco das crianças na tecnologia e proporcionar momentos de lazer e diversão em família. Não é difícil encontrar crianças cada vez mais conectadas às telas. Um estudo realizado por médicos do Hospital JK Lone, em Jaipur, na Índia, mostrou que 65% das crianças passam mais de 4 horas por dia em frente às telas.

A Construtora De Castro desenvolveu um programa inovador de atividades para crianças em seus empreendimentos, com o objetivo de reduzir o tempo de exposição às telas e promover atividades físicas e sociais.

O programa inclui oficinas de arte, atividades esportivas, jogos educativos e eventos familiares regulares. "Queremos que as crianças tenham um desenvolvimento saudável e equilibrado", explica o gerente da construtora.

As atividades são realizadas nas áreas comuns dos condomínios e contam com a participação de profissionais especializados em recreação infantil e desenvolvimento pedagógico.`
    },
    {
      id: 3,
      titulo: 'Estrutura para carros elétricos já é realidade em lançamentos imobiliários no ES',
      resumo: 'Mercado imobiliário busca atender demanda cada vez mais crescente por espaço para esse tipo de veículos na garagem.',
      categoria: 'Inovação',
      data: '20 de Dezembro, 2023',
      fonte: 'agazeta.com.br',
      imagem: noticiaEinstein,
      link: '/noticias/carros-eletricos',
      conteudo: `Fonte: agazeta.com.br Mercado imobiliário busca atender demanda cada vez mais crescente por espaço para esse tipo de veículos na garagem. No mercado automotivo, os carros eletrificados – elétricos, híbridos plug-in e híbridos – já são uma realidade cada vez mais crescente.

A De Castro Construtora está na vanguarda dessa tendência, implementando infraestrutura para carros elétricos em seus novos empreendimentos. As garagens dos edifícios já são entregues com pontos de energia preparados para instalação de carregadores.

"É uma questão de visão de futuro. Sabemos que os carros elétricos serão cada vez mais comuns, e queremos que nossos clientes estejam preparados", afirma Leandro de Castro.

A infraestrutura inclui cabeamento adequado, quadros de distribuição dimensionados e espaços reservados para instalação dos equipamentos de carregamento.`
    },
    {
      id: 4,
      titulo: 'Construtora do ES oferece solução para baratear taxa de condomínio',
      resumo: 'A previsão é de que moradores de apartamentos com 1 quarto paguem R$150 de condomínio, enquanto os que moram em unidades de 2 quartos pagarão R$250.',
      categoria: 'Inovação',
      data: '15 de Dezembro, 2023',
      fonte: 'folhavitoria.com.br',
      imagem: noticiaCriancas,
      link: '/noticias/taxa-condominio',
      conteudo: `Fonte: folhavitoria.com.br A previsão é de que moradores de apartamentos com 1 quarto paguem R$150 de condomínio, enquanto os que moram em unidades de 2 quartos pagarão R$250. No caso dos apartamentos de alto padrão, com 3 quartos e até 3 suítes, o valor previsto do condomínio é de R$450.

A De Castro Construtora desenvolveu um modelo inovador de gestão condominial que promete reduzir significativamente os custos mensais para os moradores. O sistema utiliza tecnologia e parcerias estratégicas para otimizar os gastos.

Entre as soluções implementadas estão: automação dos sistemas prediais, parcerias com fornecedores locais, gestão inteligente de energia e água, e um aplicativo que facilita a comunicação entre moradores e administração.

"Nosso objetivo é oferecer qualidade de vida com custos acessíveis. Acreditamos que é possível ter um condomínio bem administrado sem pesar no orçamento das famílias", explica o diretor da construtora.`
    },
    {
      id: 5,
      titulo: 'Construtora do Espírito Santo leva artesanato local para dentro do condomínio',
      resumo: 'O objetivo da parceria é levar o trabalho de artesãos capixabas para os moradores e visitantes do edifício.',
      categoria: 'Responsabilidade Social',
      data: '10 de Dezembro, 2023',
      fonte: 'folhavitoria.com.br',
      imagem: noticiaEinstein,
      link: '/noticias/artesanato-local',
      conteudo: `Fonte: folhavitoria.com.br O objetivo da parceria é levar o trabalho de artesãos capixabas para os moradores e visitantes do edifício. Além da feira semanal, produtos exclusivos serão criados para compor a decoração de apartamentos.

A iniciativa faz parte do programa de responsabilidade social da De Castro Construtora, que busca valorizar a cultura local e gerar renda para artesãos da região. O projeto já está sendo implementado no empreendimento Carolina Caliari.

Semanalmente, os artesãos expõem seus trabalhos no hall do edifício, criando um ambiente cultural único. Os produtos incluem cerâmica, bordados, peças em madeira e objetos decorativos típicos da região.

"Queremos que nossos empreendimentos sejam mais do que apenas prédios. Eles devem ser espaços de convivência e valorização da cultura capixaba", destaca Leandro de Castro.`
    },
    {
      id: 6,
      titulo: '10 MOTIVOS PARA VIVER EM VILA VELHA/ES',
      resumo: 'Curto e grosso. As pessoas aqui vivem mais de 100 anos. Esse motivo já seria suficiente para eu terminar esse texto.',
      categoria: 'Vila Velha',
      data: '05 de Dezembro, 2023',
      fonte: 'Blog De Castro',
      imagem: noticiaCriancas,
      link: '/noticias/motivos-vila-velha',
      conteudo: `Curto e grosso. As pessoas aqui vivem mais de 100 anos. Esse motivo já seria suficiente para eu terminar esse texto. Você sabia que assim como existe a tabela Fipe de carros, existe a Fipe Zap que trata apenas de imóveis e que Vila Velha/ES é a cidade que mais vende e vendeu apartamentos em todo o Brasil?

1. **Longevidade**: Vila Velha tem uma das maiores expectativas de vida do Brasil
2. **Mercado Imobiliário**: Líder nacional em vendas de apartamentos
3. **Localização**: Município mais antigo do Espírito Santo
4. **Praias**: Acesso às melhores praias do estado
5. **Infraestrutura**: Completa rede de serviços e comércio
6. **Cultura**: Rica história e patrimônio cultural
7. **Economia**: Centro econômico importante da Grande Vitória
8. **Educação**: Excelentes instituições de ensino
9. **Saúde**: Rede hospitalar de qualidade
10. **Qualidade de vida**: Clima tropical e ambiente familiar

Vila Velha não é apenas um lugar para morar, é um lugar para viver plenamente.`
    }
  ]

  const categorias = ['Todas', 'Parcerias', 'Responsabilidade Social', 'Inovação', 'Vila Velha']

  // Filtrar notícias baseado na categoria ativa
  const noticiasFiltradas = categoriaAtiva === 'Todas' 
    ? noticias 
    : noticias.filter(noticia => noticia.categoria === categoriaAtiva)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Notícias
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Fique por dentro das últimas novidades, parcerias e inovações da De Castro Construtora.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                variant={categoria === categoriaAtiva ? 'default' : 'outline'}
                className={`px-6 py-2 transition-all duration-300 ${
                  categoria === categoriaAtiva 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setCategoriaAtiva(categoria)}
              >
                {categoria}
                {categoria !== 'Todas' && (
                  <Badge className="ml-2 bg-blue-100 text-blue-600 text-xs">
                    {noticias.filter(n => n.categoria === categoria).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Notícias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticiasFiltradas.map((noticia, index) => (
              <AnimatedSection key={noticia.id} animation="fade-up" delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
                  <div className="relative">
                    <LazyImage
                      src={noticia.imagem}
                      alt={noticia.titulo}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {noticia.categoria}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {noticia.data}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {noticia.titulo}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {noticia.resumo}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-sm text-gray-500">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        {noticia.fonte}
                      </div>
                      
                      <Link to={noticia.link}>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Leia Mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Fique por dentro das novidades
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Receba as últimas notícias e lançamentos da De Castro Construtora diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Inscrever-se
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Noticias

