const express = require('express');
const router = express.Router();

// Dados dos empreendimentos (em produção viria de um banco de dados)
const empreendimentos = [
  {
    id: 'bacutia',
    nome: 'Bacutia - Um lugar de paz',
    status: 'LANÇAMENTO',
    localizacao: 'Alameda das Gaivotas, 21 - Praia da Bacutia, Guarapari/ES',
    descricao: 'Empreendimento baseado em estudos científicos sobre paz e redução do estresse',
    conceito: 'Mais que prédios, um propósito!',
    amenidades: 30,
    areas_vip: 6,
    tipos_unidades: 3,
    diferenciais: 7,
    imagem: '/images/empreendimentos/bacutia.jpg'
  },
  {
    id: 'carolina-caliari',
    nome: 'Carolina Caliari',
    status: 'CONCLUÍDO',
    localizacao: 'Vila Velha/ES',
    descricao: 'Residencial Clube com infraestrutura completa',
    imagem: '/images/empreendimentos/carolina-caliari.jpg'
  },
  {
    id: 'home-experience',
    nome: 'Home Experience',
    status: '100% VENDIDO',
    localizacao: 'Vila Velha/ES',
    descricao: 'Empreendimento com conceito inovador de moradia',
    imagem: '/images/empreendimentos/home-experience.jpg'
  },
  {
    id: 'chiabai-martins',
    nome: 'Chiabai Martins',
    status: '100% VENDIDO/FINALIZADO',
    localizacao: 'Vila Velha/ES',
    descricao: 'Residencial completo e entregue',
    imagem: '/images/empreendimentos/chiabai-martins.jpg'
  },
  {
    id: 'de-castro',
    nome: 'De Castro',
    status: 'NOVO PROJETO',
    localizacao: 'Vila Velha/ES',
    descricao: 'Novo empreendimento da construtora',
    imagem: '/images/empreendimentos/de-castro.jpg'
  }
];

// GET /api/empreendimentos - Listar todos os empreendimentos
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: empreendimentos,
      total: empreendimentos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar empreendimentos'
    });
  }
});

// GET /api/empreendimentos/:id - Buscar empreendimento específico
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const empreendimento = empreendimentos.find(emp => emp.id === id);
    
    if (!empreendimento) {
      return res.status(404).json({
        success: false,
        error: 'Empreendimento não encontrado'
      });
    }
    
    res.json({
      success: true,
      data: empreendimento
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar empreendimento'
    });
  }
});

// GET /api/empreendimentos/status/:status - Filtrar por status
router.get('/status/:status', (req, res) => {
  try {
    const { status } = req.params;
    const filtrados = empreendimentos.filter(emp => 
      emp.status.toLowerCase().includes(status.toLowerCase())
    );
    
    res.json({
      success: true,
      data: filtrados,
      total: filtrados.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erro ao filtrar empreendimentos'
    });
  }
});

module.exports = router;

