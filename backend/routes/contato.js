const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configuração do transporter de email (configurar com credenciais reais)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// POST /api/contato - Enviar mensagem de contato
router.post('/', async (req, res) => {
  try {
    const { nome, email, telefone, empreendimento, mensagem, destinatario } = req.body;
    
    // Log da requisição para debug
    console.log('Recebida requisição de contato:', { nome, email, telefone, empreendimento });
    
    // Validação básica
    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        success: false,
        error: 'Nome, email e mensagem são obrigatórios'
      });
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Email inválido'
      });
    }
    
    // Preparar email
    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@decastroconstrutora.com.br',
      to: destinatario || 'borghborges@gmail.com',
      subject: `Novo contato do site - ${empreendimento || 'Geral'}`,
      html: `
        <h2>Nova mensagem do site De Castro Construtora</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Empreendimento:</strong> ${empreendimento || 'Não especificado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
        <hr>
        <p><small>Enviado em: ${new Date().toLocaleString('pt-BR')}</small></p>
      `
    };
    
    let emailSent = false;
    
    // Tentar enviar email (apenas se configurado)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log('Email enviado com sucesso para:', destinatario || 'borghborges@gmail.com');
      } catch (emailError) {
        console.error('Erro ao enviar email:', emailError);
        // Continua mesmo se o email falhar
      }
    }
    
    // Log da mensagem (em produção, salvar no banco de dados)
    console.log('Nova mensagem de contato registrada:', {
      nome,
      email,
      telefone,
      empreendimento,
      mensagem,
      emailSent,
      timestamp: new Date().toISOString()
    });
    
    res.json({
      success: true,
      message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.',
      emailSent
    });
    
  } catch (error) {
    console.error('Erro ao processar mensagem de contato:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno do servidor. Tente novamente mais tarde.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/contato/info - Informações de contato
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      empresa: 'De Castro Construtora',
      telefone: '(27) 3333-4444',
      whatsapp: '(27) 99999-8888',
      email: 'contato@decastroconstrutora.com.br',
      endereco: 'Av. Fortaleza, 1520 - Itapuã, Vila Velha - ES, 29101-575',
      horario: 'Segunda a Sexta: 8h às 18h',
      redes_sociais: {
        instagram: '@decastroconstrutora',
        facebook: 'De Castro Construtora',
        linkedin: 'de-castro-construtora'
      }
    }
  });
});

module.exports = router;

