const express = require('express');
const router = express.Router();

// Dados das notícias (em produção viria de um banco de dados)
const noticias = [
  {
    id: 1,
    titulo: 'Einstein Conecta: Inovação em Conectividade',
    resumo: 'Nova tecnologia revoluciona a conectividade em empreendimentos residenciais',
    conteudo: 'A De Castro Construtora anuncia a implementação da tecnologia Einstein Conecta em seus novos empreendimentos...',
    imagem: '/images/noticias/einstein-conecta.jpg',
    data: '2024-03-15',
    categoria: 'Tecnologia',
    autor: 'De Castro Construtora'
  },
  {
    id: 2,
    titulo: 'Crianças Longe das Telas: Espaços de Convivência',
    resumo: 'Novos projetos focam em áreas de lazer que estimulam a interação social',
    conteudo: 'Em resposta às preocupações modernas sobre o tempo excessivo de tela, nossos empreendimentos incluem espaços especialmente projetados...',
    imagem: '/images/noticias/criancas-longe-telas.jpg',
    data: '2024-03-10',
    categoria: 'Família',
    autor: 'De Castro Construtora'
  },
  {
    id: 3,
    titulo: 'Sustentabilidade em Foco nos Novos Projetos',
    resumo: 'Empreendimentos incorporam tecnologias verdes e sustentáveis',
    conteudo: 'A sustentabilidade é prioridade nos novos projetos da De Castro Construtora, com energia solar, captação de água da chuva...',
    imagem: '/images/noticias/sustentabilidade.jpg',
    data: '2024-03-05',
    categoria: 'Sustentabilidade',
    autor: 'De Castro Construtora'
  }
];

// GET /api/noticias - Listar todas as notícias
router.get('/', (req, res) => {
  try {
    const { categoria, limite } = req.query;
    let noticiasFiltered = [...noticias];
    
    // Filtrar por categoria se especificada
    if (categoria) {
      noticiasFiltered = noticiasFiltered.filter(noticia => 
        noticia.categoria.toLowerCase() === categoria.toLowerCase()
      );
    }
    
    // Ordenar por data (mais recentes primeiro)
    noticiasFiltered.sort((a, b) => new Date(b.data) - new Date(a.data));
    
    // Limitar quantidade se especificado
    if (limite) {
      const limit = parseInt(limite);
      if (!isNaN(limit) && limit > 0) {
        noticiasFiltered = noticiasFiltered.slice(0, limit);
      }
    }
    
    res.json({
      success: true,
      data: noticiasFiltered,
      total: noticiasFiltered.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar notícias'
    });
  }
});

// GET /api/noticias/:id - Buscar notícia específica
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const noticia = noticias.find(n => n.id === parseInt(id));
    
    if (!noticia) {
      return res.status(404).json({
        success: false,
        error: 'Notícia não encontrada'
      });
    }
    
    res.json({
      success: true,
      data: noticia
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar notícia'
    });
  }
});

// GET /api/noticias/categoria/:categoria - Filtrar por categoria
router.get('/categoria/:categoria', (req, res) => {
  try {
    const { categoria } = req.params;
    const noticiasFiltered = noticias.filter(noticia => 
      noticia.categoria.toLowerCase() === categoria.toLowerCase()
    );
    
    res.json({
      success: true,
      data: noticiasFiltered,
      total: noticiasFiltered.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao filtrar notícias'
    });
  }
});

// GET /api/noticias/recentes/:quantidade - Buscar notícias mais recentes
router.get('/recentes/:quantidade', (req, res) => {
  try {
    const { quantidade } = req.params;
    const limit = parseInt(quantidade) || 3;
    
    const noticiasRecentes = [...noticias]
      .sort((a, b) => new Date(b.data) - new Date(a.data))
      .slice(0, limit);
    
    res.json({
      success: true,
      data: noticiasRecentes,
      total: noticiasRecentes.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar notícias recentes'
    });
  }
});

module.exports = router;

