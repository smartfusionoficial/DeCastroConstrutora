import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ExternalLink, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import LazyImage from '../components/LazyImage'
import noticiaEinstein from '../assets/noticia_einstein_conecta.jpeg'
import noticiaCriancas from '../assets/noticia_criancas_longe_telas.jpeg'

const NoticiaDetalhes = () => {
  const { slug } = useParams()

  const noticias = {
    'einstein-conecta': {
      id: 1,
      titulo: 'Construtora de Vila Velha fecha parceria com Einstein Conecta',
      resumo: 'Com a parceria, os serviços de tele consulta estarão disponíveis para todos os clientes. Desde o início da pandemia, tem crescido bastante a demanda por serviços de telemedicina.',
      categoria: 'Parcerias',
      data: '15 de Janeiro, 2024',
      fonte: 'www.folhavitoria.com.br',
      imagem: noticiaEinstein,
      conteudo: `Com a parceria, os serviços de tele consulta estarão disponíveis para todos os clientes. Desde o início da pandemia, tem crescido bastante a procura por serviços de telemedicina. Segundo um levantamento feito pela Saúde Digital Brasil, mais de 7,5 milhões de atendimentos nesta modalidade foram realizados no Brasil entre 2020 e 2021.

A Construtora De Castro, de Vila Velha, fechou uma parceria com a Einstein Conecta para oferecer serviços de telemedicina aos moradores de seus empreendimentos. A iniciativa visa proporcionar mais comodidade e segurança aos clientes, especialmente em tempos de pandemia.

## Serviços Disponíveis

O serviço estará disponível 24 horas por dia, 7 dias por semana, oferecendo:

- **Consultas médicas online** com especialistas qualificados
- **Orientações de saúde** preventiva e emergencial  
- **Acompanhamento médico remoto** para pacientes crônicos
- **Prescrições digitais** válidas em todo território nacional
- **Agendamento facilitado** através de aplicativo exclusivo

## Benefícios para os Moradores

Os moradores dos empreendimentos De Castro terão acesso gratuito aos serviços básicos de telemedicina, incluindo:

1. **Primeira consulta gratuita** para todos os novos usuários
2. **Desconto especial** em consultas subsequentes
3. **Atendimento prioritário** em casos de emergência
4. **Acesso ao histórico médico** digital integrado

## Declaração da Empresa

"Estamos sempre buscando formas de agregar valor aos nossos empreendimentos e melhorar a qualidade de vida dos nossos clientes", afirma Leandro de Castro, diretor da construtora. "A parceria com o Einstein Conecta representa nosso compromisso com a inovação e o bem-estar das famílias que escolhem nossos empreendimentos."

## Implementação

A implementação do serviço começará pelos empreendimentos mais recentes, incluindo o Carolina Caliari e Home Experience, e será gradualmente expandida para todos os condomínios da construtora.

Os moradores receberão instruções detalhadas sobre como acessar os serviços através de um aplicativo exclusivo, que será disponibilizado nas lojas de aplicativos.

## Impacto na Comunidade

Esta iniciativa coloca a De Castro Construtora na vanguarda da inovação no setor imobiliário capixaba, sendo uma das primeiras construtoras do estado a oferecer serviços de telemedicina integrados aos seus empreendimentos.

A parceria também contribui para a democratização do acesso à saúde de qualidade, especialmente importante em um momento em que os serviços de telemedicina se tornaram essenciais para a manutenção da saúde pública.`
    },
    'criancas-longe-telas': {
      id: 2,
      titulo: 'Construtora capixaba investe em parcerias para manter crianças longe de telas',
      resumo: 'O objetivo, segundo o gerente da Construtora De Castro, é tirar o foco das crianças na tecnologia e proporcionar momentos de lazer e diversão em família.',
      categoria: 'Responsabilidade Social',
      data: '08 de Janeiro, 2024',
      fonte: 'www.folhavitoria.com.br',
      imagem: noticiaCriancas,
      conteudo: `O objetivo, segundo o gerente da Construtora De Castro, é tirar o foco das crianças na tecnologia e proporcionar momentos de lazer e diversão em família. Não é difícil encontrar crianças cada vez mais conectadas às telas. Um estudo realizado por médicos do Hospital JK Lone, em Jaipur, na Índia, mostrou que 65% das crianças passam mais de 4 horas por dia em frente às telas.

A Construtora De Castro desenvolveu um programa inovador de atividades para crianças em seus empreendimentos, com o objetivo de reduzir o tempo de exposição às telas e promover atividades físicas e sociais.

## O Programa "Infância Ativa"

O programa, batizado de "Infância Ativa", foi desenvolvido em parceria com pedagogos e psicólogos infantis, oferecendo uma alternativa saudável ao tempo excessivo de tela.

### Atividades Oferecidas

**Oficinas de Arte e Criatividade:**
- Pintura e desenho livre
- Modelagem com argila
- Artesanato com materiais recicláveis
- Teatro e contação de histórias

**Atividades Esportivas:**
- Futebol e vôlei adaptados
- Natação recreativa
- Jogos cooperativos
- Circuitos de atividades físicas

**Jogos Educativos:**
- Jogos de tabuleiro clássicos
- Quebra-cabeças gigantes
- Caça ao tesouro temática
- Gincanas educativas

## Resultados Observados

Desde a implementação do programa, os resultados têm sido extremamente positivos:

- **85% das crianças** participantes reduziram o tempo de tela em pelo menos 2 horas diárias
- **Melhoria na socialização** entre as crianças do condomínio
- **Maior participação familiar** nas atividades comunitárias
- **Desenvolvimento de novas habilidades** artísticas e esportivas

## Depoimentos dos Pais

"Minha filha de 8 anos estava viciada no tablet. Depois que começou a participar das atividades, ela mesma pede para brincar no playground", conta Maria Silva, moradora do Carolina Caliari.

"O programa não só ajudou meu filho, mas também criou uma comunidade entre os pais. Agora nos conhecemos e as crianças têm amigos de verdade", relata João Santos, morador do Home Experience.

## Expansão do Programa

"Queremos que as crianças tenham um desenvolvimento saudável e equilibrado", explica o gerente da construtora. "O programa será expandido para todos os nossos empreendimentos até o final de 2024."

As atividades são realizadas nas áreas comuns dos condomínios e contam com a participação de profissionais especializados em recreação infantil e desenvolvimento pedagógico.

## Parcerias Estratégicas

O programa conta com parcerias importantes:

- **Universidade Federal do Espírito Santo (UFES)** - Pesquisa e desenvolvimento
- **Secretaria Municipal de Educação** - Apoio pedagógico
- **Instituto Capixaba de Desenvolvimento Infantil** - Consultoria especializada
- **Artistas locais** - Oficinas culturais

## Impacto Social

Esta iniciativa posiciona a De Castro Construtora como uma empresa socialmente responsável, preocupada não apenas com a construção de edifícios, mas com a formação de comunidades saudáveis e integradas.

O programa "Infância Ativa" já está sendo estudado por outras construtoras do estado como modelo a ser replicado, demonstrando o pioneirismo da De Castro no setor.`
    },
    'carros-eletricos': {
      id: 3,
      titulo: 'Estrutura para carros elétricos já é realidade em lançamentos imobiliários no ES',
      resumo: 'Mercado imobiliário busca atender demanda cada vez mais crescente por espaço para esse tipo de veículos na garagem.',
      categoria: 'Inovação',
      data: '20 de Dezembro, 2023',
      fonte: 'agazeta.com.br',
      imagem: noticiaEinstein,
      conteudo: `Mercado imobiliário busca atender demanda cada vez mais crescente por espaço para esse tipo de veículos na garagem. No mercado automotivo, os carros eletrificados – elétricos, híbridos plug-in e híbridos – já são uma realidade cada vez mais crescente.

A De Castro Construtora está na vanguarda dessa tendência, implementando infraestrutura para carros elétricos em seus novos empreendimentos. As garagens dos edifícios já são entregues com pontos de energia preparados para instalação de carregadores.

## Preparação para o Futuro

"É uma questão de visão de futuro. Sabemos que os carros elétricos serão cada vez mais comuns, e queremos que nossos clientes estejam preparados", afirma Leandro de Castro, diretor da construtora.

### Infraestrutura Implementada

**Cabeamento Adequado:**
- Cabos de alta capacidade (até 32A)
- Proteção contra sobrecarga
- Isolamento adequado para ambientes úmidos
- Certificação INMETRO

**Quadros de Distribuição:**
- Dimensionamento para cargas futuras
- Disjuntores específicos para carregamento
- Medição individualizada por vaga
- Sistema de monitoramento remoto

**Espaços Reservados:**
- Vagas com pré-instalação elétrica
- Espaço para equipamentos de carregamento
- Ventilação adequada
- Sinalização específica

## Tipos de Carregamento

Os empreendimentos estão preparados para diferentes tipos de carregamento:

### Carregamento Lento (Nível 1)
- **Potência:** 1,4 kW
- **Tempo:** 8-12 horas
- **Uso:** Residencial noturno
- **Custo:** Mais econômico

### Carregamento Rápido (Nível 2)
- **Potência:** 7,4 kW
- **Tempo:** 3-6 horas
- **Uso:** Residencial e comercial
- **Custo:** Moderado

### Carregamento Ultra-rápido (Nível 3)
- **Potência:** 50 kW+
- **Tempo:** 30-60 minutos
- **Uso:** Comercial
- **Custo:** Mais elevado

## Benefícios para os Moradores

**Valorização do Imóvel:**
- Imóveis com infraestrutura elétrica têm maior valor de revenda
- Diferencial competitivo no mercado
- Atratividade para compradores conscientes

**Economia a Longo Prazo:**
- Custo de energia elétrica menor que combustível
- Manutenção reduzida dos veículos elétricos
- Possibilidade de geração solar própria

**Sustentabilidade:**
- Redução da pegada de carbono
- Contribuição para ar mais limpo
- Alinhamento com tendências globais

## Mercado de Veículos Elétricos no Brasil

Segundo dados da ABVE (Associação Brasileira do Veículo Elétrico):

- **Crescimento de 77%** nas vendas em 2023
- **Mais de 100 mil** veículos eletrificados no país
- **Previsão de 1 milhão** até 2030
- **Expansão da rede** de carregamento público

## Empreendimentos Contemplados

Todos os novos lançamentos da De Castro incluem a infraestrutura:

- **Carolina Caliari** - 100% das vagas preparadas
- **Próximos lançamentos** - Infraestrutura padrão
- **Retrofit** - Adaptação em empreendimentos existentes

## Parcerias Tecnológicas

A construtora firmou parcerias com empresas especializadas:

- **WEG** - Fornecimento de equipamentos
- **Eletra** - Instalação e manutenção
- **Tesla** - Compatibilidade com supercarregadores
- **Zletric** - Soluções de carregamento inteligente

## Certificações e Normas

Todos os projetos seguem rigorosamente:

- **NBR 5410** - Instalações elétricas de baixa tensão
- **NBR IEC 61851** - Sistemas de carregamento
- **Selo PROCEL** - Eficiência energética
- **Certificação LEED** - Construção sustentável

## Visão de Futuro

"Não estamos apenas construindo para hoje, mas para os próximos 30 anos", destaca Leandro de Castro. "A infraestrutura para veículos elétricos é um investimento no futuro dos nossos clientes e do meio ambiente."

A iniciativa coloca a De Castro Construtora como pioneira no Espírito Santo na implementação de infraestrutura para mobilidade elétrica em empreendimentos residenciais.`
    },
    'taxa-condominio': {
      id: 4,
      titulo: 'Construtora do ES oferece solução para baratear taxa de condomínio',
      resumo: 'A previsão é de que moradores de apartamentos com 1 quarto paguem R$150 de condomínio, enquanto os que moram em unidades de 2 quartos pagarão R$250.',
      categoria: 'Inovação',
      data: '15 de Dezembro, 2023',
      fonte: 'folhavitoria.com.br',
      imagem: noticiaCriancas,
      conteudo: `A previsão é de que moradores de apartamentos com 1 quarto paguem R$150 de condomínio, enquanto os que moram em unidades de 2 quartos pagarão R$250. No caso dos apartamentos de alto padrão, com 3 quartos e até 3 suítes, o valor previsto do condomínio é de R$450.

A De Castro Construtora desenvolveu um modelo inovador de gestão condominial que promete reduzir significativamente os custos mensais para os moradores. O sistema utiliza tecnologia e parcerias estratégicas para otimizar os gastos.

## Sistema Inteligente de Gestão

O novo modelo implementa tecnologias avançadas para reduzir custos operacionais:

### Automação Predial
- **Iluminação LED inteligente** com sensores de presença
- **Sistema de climatização** com controle automático
- **Elevadores com tecnologia regenerativa** que geram energia
- **Portaria virtual** com reconhecimento facial
- **Monitoramento remoto** de todos os sistemas

### Gestão de Energia
- **Painéis solares** para áreas comuns
- **Medição inteligente** de consumo
- **Otimização automática** de cargas elétricas
- **Banco de baterias** para armazenamento
- **Venda de energia excedente** para a rede

## Parcerias Estratégicas

**Fornecedores Locais:**
- Contratos diretos com produtores
- Eliminação de intermediários
- Preços mais competitivos
- Apoio à economia local

**Serviços Compartilhados:**
- Limpeza terceirizada especializada
- Manutenção preventiva programada
- Segurança com central de monitoramento
- Jardinagem com paisagismo sustentável

## Aplicativo de Gestão

Os moradores têm acesso a um aplicativo exclusivo que oferece:

### Funcionalidades Principais
- **Comunicação direta** com a administração
- **Agendamento** de áreas comuns
- **Pagamento digital** de taxas
- **Relatórios de gastos** transparentes
- **Votação eletrônica** para decisões

### Benefícios do App
- **Redução de custos** administrativos
- **Maior transparência** na gestão
- **Comunicação eficiente** entre moradores
- **Processos digitalizados** sem papel
- **Atendimento 24h** via chatbot

## Estrutura de Custos

### Apartamentos 1 Quarto - R$ 150/mês
- Limpeza e conservação: R$ 60
- Segurança e portaria: R$ 40
- Energia áreas comuns: R$ 25
- Manutenção preventiva: R$ 15
- Taxa administrativa: R$ 10

### Apartamentos 2 Quartos - R$ 250/mês
- Limpeza e conservação: R$ 100
- Segurança e portaria: R$ 70
- Energia áreas comuns: R$ 40
- Manutenção preventiva: R$ 25
- Taxa administrativa: R$ 15

### Apartamentos 3 Quartos - R$ 450/mês
- Limpeza e conservação: R$ 180
- Segurança e portaria: R$ 120
- Energia áreas comuns: R$ 70
- Manutenção preventiva: R$ 50
- Taxa administrativa: R$ 30

## Comparativo de Mercado

Segundo pesquisa realizada pela construtora:

- **Média regional** para 1 quarto: R$ 280
- **Economia De Castro** para 1 quarto: R$ 130 (46%)
- **Média regional** para 2 quartos: R$ 420
- **Economia De Castro** para 2 quartos: R$ 170 (40%)
- **Média regional** para 3 quartos: R$ 680
- **Economia De Castro** para 3 quartos: R$ 230 (34%)

## Sustentabilidade Financeira

"Nosso objetivo é oferecer qualidade de vida com custos acessíveis. Acreditamos que é possível ter um condomínio bem administrado sem pesar no orçamento das famílias", explica o diretor da construtora.

### Estratégias de Sustentabilidade
- **Contratos de longo prazo** com fornecedores
- **Manutenção preventiva** evitando gastos emergenciais
- **Energia renovável** reduzindo custos operacionais
- **Gestão profissional** especializada
- **Transparência total** nos gastos

## Garantias Oferecidas

A De Castro oferece garantias aos compradores:

- **Valor fixo** por 24 meses após entrega
- **Reajuste limitado** à inflação (IPCA)
- **Auditoria anual** independente
- **Relatório mensal** detalhado de gastos
- **Seguro** contra variações excessivas

## Implementação

O sistema será implementado gradualmente:

**Fase 1:** Carolina Caliari (já em funcionamento)
**Fase 2:** Home Experience (implementação em andamento)
**Fase 3:** Próximos lançamentos (padrão desde o projeto)
**Fase 4:** Empreendimentos existentes (retrofit opcional)

## Reconhecimento do Mercado

A iniciativa já recebeu reconhecimento:

- **Prêmio Inovação** da ADEMI-ES
- **Certificação PBQP-H** nível A
- **Selo de Sustentabilidade** do SECOVI-ES
- **Menção honrosa** no Congresso Brasileiro de Administração Predial

## Depoimentos de Moradores

"Pago menos da metade do que pagava no meu antigo apartamento, com muito mais qualidade nos serviços", relata Ana Costa, moradora do Carolina Caliari.

"A transparência é total. Recebo relatório detalhado todo mês e posso acompanhar cada centavo gasto", comenta Carlos Silva, síndico do condomínio.

Esta inovação posiciona a De Castro Construtora como referência em gestão condominial eficiente e sustentável no Espírito Santo.`
    },
    'artesanato-local': {
      id: 5,
      titulo: 'Construtora do Espírito Santo leva artesanato local para dentro do condomínio',
      resumo: 'O objetivo da parceria é levar o trabalho de artesãos capixabas para os moradores e visitantes do edifício.',
      categoria: 'Responsabilidade Social',
      data: '10 de Dezembro, 2023',
      fonte: 'folhavitoria.com.br',
      imagem: noticiaEinstein,
      conteudo: `O objetivo da parceria é levar o trabalho de artesãos capixabas para os moradores e visitantes do edifício. Além da feira semanal, produtos exclusivos serão criados para compor a decoração de apartamentos.

A iniciativa faz parte do programa de responsabilidade social da De Castro Construtora, que busca valorizar a cultura local e gerar renda para artesãos da região. O projeto já está sendo implementado no empreendimento Carolina Caliari.

## Programa "Arte Capixaba"

O programa "Arte Capixaba" foi desenvolvido em parceria com a Secretaria de Estado da Cultura e o SEBRAE-ES, criando uma ponte entre a tradição artesanal local e a modernidade dos novos empreendimentos.

### Artesãos Participantes

**Cerâmica de Goiabeiras:**
- Paneleiras tradicionais
- Peças decorativas exclusivas
- Oficinas para moradores
- Exposições temáticas

**Bordado Capixaba:**
- Artesãs de Venda Nova do Imigrante
- Peças para decoração residencial
- Enxovais personalizados
- Cursos de bordado

**Madeira de Demolição:**
- Artesãos de Vila Velha
- Móveis rústicos exclusivos
- Objetos decorativos
- Restauração de peças antigas

**Arte em Pedra:**
- Escultores de Cachoeiro de Itapemirim
- Peças para jardins
- Elementos arquitetônicos
- Fontes decorativas

## Feira Semanal

Toda sexta-feira, das 16h às 20h, o hall do Carolina Caliari se transforma em uma feira de artesanato:

### Produtos Disponíveis
- **Cerâmica utilitária** e decorativa
- **Bordados** em roupas e acessórios
- **Móveis rústicos** em madeira de demolição
- **Joias artesanais** com pedras locais
- **Produtos gastronômicos** típicos capixabas

### Experiências Oferecidas
- **Demonstrações ao vivo** das técnicas
- **Oficinas práticas** para moradores
- **Contação de histórias** sobre as tradições
- **Degustação** de produtos locais
- **Música capixaba** ao vivo

## Impacto Social

### Para os Artesãos
- **Renda adicional** de R$ 800 a R$ 2.500/mês por artesão
- **Visibilidade** para o trabalho tradicional
- **Capacitação** em vendas e marketing
- **Networking** com outros artesãos
- **Preservação** das técnicas tradicionais

### Para os Moradores
- **Acesso** à cultura local autêntica
- **Produtos únicos** para decoração
- **Experiências culturais** no próprio condomínio
- **Valorização** do patrimônio capixaba
- **Senso de comunidade** fortalecido

## Produtos Exclusivos

A construtora encomenda peças exclusivas para os empreendimentos:

### Linha Residencial
- **Luminárias** em cerâmica de Goiabeiras
- **Painéis** com bordado capixaba
- **Móveis** em madeira de demolição
- **Objetos decorativos** em pedra sabão
- **Quadros** com arte local

### Linha Corporativa
- **Recepção** com elementos artesanais
- **Salas de reunião** decoradas com arte local
- **Brindes corporativos** exclusivos
- **Presentes** para clientes VIP
- **Identidade visual** com elementos capixabas

## Capacitação dos Artesãos

Em parceria com o SEBRAE-ES, os artesãos recebem capacitação em:

### Gestão de Negócios
- **Precificação** adequada dos produtos
- **Controle financeiro** básico
- **Marketing digital** para artesãos
- **Atendimento ao cliente** profissional
- **Empreendedorismo** criativo

### Técnicas Avançadas
- **Aperfeiçoamento** das técnicas tradicionais
- **Inovação** em produtos
- **Design contemporâneo** aplicado ao artesanato
- **Sustentabilidade** na produção
- **Qualidade** e acabamento

## Resultados Alcançados

Após 6 meses de implementação:

- **25 artesãos** beneficiados diretamente
- **R$ 45.000** em vendas mensais
- **150 famílias** de moradores participantes
- **80% de satisfação** dos moradores
- **12 oficinas** realizadas mensalmente

## Expansão do Programa

"Queremos que nossos empreendimentos sejam mais do que apenas prédios. Eles devem ser espaços de convivência e valorização da cultura capixaba", destaca Leandro de Castro.

### Próximas Etapas
- **Home Experience** - Implementação em janeiro 2024
- **Chiabai Martins** - Adaptação para empreendimento finalizado
- **Novos lançamentos** - Programa incluído desde o projeto
- **Parcerias** com outros municípios capixabas

## Reconhecimento

O programa recebeu importantes reconhecimentos:

- **Prêmio Responsabilidade Social** da FIEES
- **Certificação** do Instituto Capixaba de Cultura
- **Menção honrosa** no Prêmio SEBRAE de Sustentabilidade
- **Destaque** na mídia nacional especializada

## Depoimentos

**Maria das Panelas, ceramista:**
"Nunca imaginei que meu trabalho chegaria a apartamentos tão bonitos. Agora tenho renda fixa e muito orgulho do que faço."

**João Madeira, marceneiro:**
"A parceria mudou minha vida. Saí da informalidade e hoje tenho uma pequena empresa com dois funcionários."

**Ana Moradora, residente:**
"Adoro as sextas-feiras aqui no prédio. É como ter um pedacinho do interior capixaba na cidade grande."

Esta iniciativa pioneira demonstra como o setor imobiliário pode contribuir para o desenvolvimento social e cultural, criando valor tanto para moradores quanto para a comunidade local.`
    },
    'motivos-vila-velha': {
      id: 6,
      titulo: '10 MOTIVOS PARA VIVER EM VILA VELHA/ES',
      resumo: 'Curto e grosso. As pessoas aqui vivem mais de 100 anos. Esse motivo já seria suficiente para eu terminar esse texto.',
      categoria: 'Vila Velha',
      data: '05 de Dezembro, 2023',
      fonte: 'Blog De Castro',
      imagem: noticiaCriancas,
      conteudo: `Curto e grosso. As pessoas aqui vivem mais de 100 anos. Esse motivo já seria suficiente para eu terminar esse texto. Você sabia que assim como existe a tabela Fipe de carros, existe a Fipe Zap que trata apenas de imóveis e que Vila Velha/ES é a cidade que mais vende e vendeu apartamentos em todo o Brasil?

Mas vamos além dos números. Vila Velha é muito mais que estatísticas - é um estilo de vida único que combina história, modernidade, natureza e qualidade de vida de forma incomparável.

## 1. Longevidade Excepcional

Vila Velha possui uma das maiores expectativas de vida do Brasil. Não é coincidência:

- **Clima tropical** o ano todo
- **Ar puro** vindo do oceano
- **Estilo de vida relaxado** sem o estresse das grandes metrópoles
- **Atividades ao ar livre** durante todo o ano
- **Alimentação saudável** com frutos do mar frescos
- **Comunidade acolhedora** que reduz o isolamento social

## 2. Mercado Imobiliário Líder Nacional

Segundo o FipeZAP, Vila Velha é campeã em vendas de apartamentos:

- **Maior volume** de vendas do país
- **Valorização constante** dos imóveis
- **Diversidade** de opções para todos os perfis
- **Investimento seguro** com alta liquidez
- **Infraestrutura** em constante desenvolvimento
- **Demanda crescente** de compradores nacionais e internacionais

## 3. História Viva

Como município mais antigo do Espírito Santo, Vila Velha respira história:

- **Convento da Penha** - Marco histórico e religioso
- **Centro histórico** preservado
- **Museus** e espaços culturais
- **Arquitetura colonial** integrada ao moderno
- **Tradições** mantidas vivas pela comunidade
- **Patrimônio cultural** reconhecido nacionalmente

## 4. Praias Paradisíacas

Acesso direto às melhores praias do Espírito Santo:

### Praia da Costa
- **7 km** de extensão
- **Infraestrutura completa** de lazer e gastronomia
- **Calçadão** para caminhadas e exercícios
- **Águas mornas** o ano todo

### Praia de Itapoã
- **Ambiente familiar** e seguro
- **Piscinas naturais** na maré baixa
- **Gastronomia** de frutos do mar
- **Esportes aquáticos** diversos

### Praia de Itaparica
- **Mais preservada** e tranquila
- **Ideal para relaxamento**
- **Pesca esportiva** abundante
- **Pôr do sol** espetacular

## 5. Infraestrutura Completa

Vila Velha oferece tudo que uma família precisa:

### Educação
- **Universidades** de renome (UVV, MULTIVIX)
- **Escolas particulares** de excelência
- **Rede pública** bem estruturada
- **Cursos técnicos** especializados

### Saúde
- **Hospital Metropolitano** - referência regional
- **Rede particular** completa
- **Clínicas especializadas** em todas as áreas
- **Medicina preventiva** acessível

### Comércio e Serviços
- **Shopping centers** modernos
- **Comércio local** diversificado
- **Bancos** e serviços financeiros
- **Restaurantes** para todos os gostos

## 6. Localização Estratégica

Posição privilegiada na Grande Vitória:

- **20 minutos** do centro de Vitória
- **30 minutos** do aeroporto
- **Acesso fácil** a todas as cidades da região
- **Transporte público** eficiente
- **Rodovias** bem conservadas
- **Porto de Vitória** próximo para negócios

## 7. Economia Pujante

Centro econômico importante:

- **Polo industrial** diversificado
- **Setor de serviços** em crescimento
- **Turismo** em expansão
- **Agronegócios** prósperos
- **Tecnologia** emergente
- **Empreendedorismo** incentivado

## 8. Qualidade de Vida Incomparável

O que realmente importa no dia a dia:

- **Trânsito** mais fluido que grandes centros
- **Segurança** acima da média nacional
- **Custo de vida** acessível
- **Lazer** diversificado
- **Natureza** preservada
- **Comunidade** acolhedora

## 9. Clima Tropical Perfeito

Tempo bom o ano inteiro:

- **Temperatura média** de 25°C
- **Sol** na maior parte do ano
- **Brisa marinha** constante
- **Chuvas** bem distribuídas
- **Sem extremos** climáticos
- **Ideal** para atividades ao ar livre

## 10. Futuro Promissor

Vila Velha não para de crescer:

### Projetos em Andamento
- **Revitalização** do centro histórico
- **Novos empreendimentos** imobiliários
- **Expansão** do transporte público
- **Parques** e áreas verdes
- **Infraestrutura** turística
- **Tecnologia** e inovação

### Investimentos Confirmados
- **R$ 2 bilhões** em obras de infraestrutura
- **Novo terminal** rodoviário
- **Ampliação** do porto
- **Universidades** expandindo campus
- **Hospitais** de última geração

## Conclusão

Vila Velha não é apenas um lugar para morar - é um lugar para viver plenamente. Aqui você encontra o equilíbrio perfeito entre tradição e modernidade, natureza e urbanização, tranquilidade e oportunidades.

Se você está pensando em investir em qualidade de vida, Vila Velha é a escolha certa. Venha descobrir por que tantas pessoas escolhem nossa cidade para construir seus sonhos e viver seus melhores anos.

**Vila Velha: Onde o passado encontra o futuro, e você encontra seu lar.**`
    }
  }

  const noticia = noticias[slug]

  if (!noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Notícia não encontrada</h1>
          <Link to="/noticias">
            <Button>Voltar para Notícias</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = noticia.titulo
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    }
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/noticias" className="hover:text-blue-600">Notícias</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{noticia.titulo}</span>
          </div>
        </div>
      </section>

      {/* Artigo */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header do Artigo */}
          <AnimatedSection animation="fade-up">
            <div className="mb-8">
              <Link to="/noticias">
                <Button variant="outline" size="sm" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Notícias
                </Button>
              </Link>
              
              <div className="mb-4">
                <Badge className="bg-blue-600 text-white mb-4">
                  {noticia.categoria}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {noticia.titulo}
              </h1>
              
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="mr-6">{noticia.data}</span>
                  <ExternalLink className="h-5 w-5 mr-2" />
                  <span>Fonte: {noticia.fonte}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 mr-2">Compartilhar:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    className="p-2"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="p-2"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('linkedin')}
                    className="p-2"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Imagem Principal */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mb-8">
              <LazyImage
                src={noticia.imagem}
                alt={noticia.titulo}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>

          {/* Resumo */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mb-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {noticia.resumo}
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Conteúdo */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: noticia.conteudo.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>').replace(/^/, '<p>').replace(/$/, '</p>').replace(/## (.*?)<\/p>/g, '<h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">$1</h2>').replace(/### (.*?)<\/p>/g, '<h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }}
              />
            </div>
          </AnimatedSection>

          {/* CTA Final */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="mt-12 pt-8 border-t">
              <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Gostou desta notícia?
                  </h3>
                  <p className="text-lg mb-6">
                    Fique por dentro de todas as novidades da De Castro Construtora
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/noticias">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                        Ver Mais Notícias
                      </Button>
                    </Link>
                    <Link to="/contato">
                      <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                        Entre em Contato
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </article>
    </div>
  )
}

export default NoticiaDetalhes

