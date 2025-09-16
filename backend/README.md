# De Castro Construtora - Backend API

Backend API para o site da De Castro Construtora, desenvolvido em Node.js com Express.

## 🚀 Funcionalidades

- **API de Empreendimentos**: Listagem e detalhes dos empreendimentos
- **Sistema de Contato**: Envio de mensagens via email
- **Notícias**: Gerenciamento de notícias e artigos
- **Segurança**: Rate limiting, CORS, Helmet
- **Health Check**: Monitoramento da saúde da API

## 📋 Endpoints Disponíveis

### Empreendimentos
- `GET /api/empreendimentos` - Listar todos os empreendimentos
- `GET /api/empreendimentos/:id` - Buscar empreendimento específico
- `GET /api/empreendimentos/status/:status` - Filtrar por status

### Contato
- `POST /api/contato` - Enviar mensagem de contato
- `GET /api/contato/info` - Informações de contato da empresa

### Notícias
- `GET /api/noticias` - Listar todas as notícias
- `GET /api/noticias/:id` - Buscar notícia específica
- `GET /api/noticias/categoria/:categoria` - Filtrar por categoria
- `GET /api/noticias/recentes/:quantidade` - Notícias mais recentes

### Sistema
- `GET /api/health` - Health check da API
- `GET /api` - Informações da API

## 🛠️ Instalação e Execução

### Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Executar em modo desenvolvimento
npm run dev

# Executar em modo produção
npm start
```

### Produção (Digital Ocean)
```bash
# Instalar dependências de produção
npm install --production

# Executar com PM2
pm2 start server.js --name "decastro-api"
pm2 save
pm2 startup
```

## 🔧 Configuração

### Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env` e configure:

- `NODE_ENV`: Ambiente (development/production)
- `PORT`: Porta do servidor (padrão: 3001)
- `SMTP_*`: Configurações de email
- `CONTACT_EMAIL`: Email para receber contatos

### CORS
O backend está configurado para aceitar requisições de:
- `http://localhost:5173` (desenvolvimento)
- `http://localhost:3000` (desenvolvimento)
- `https://www.decastroconstrutora.com.br` (produção)
- `https://decastroconstrutora.com.br` (produção)

## 📦 Dependências

### Produção
- **express**: Framework web
- **cors**: Controle de CORS
- **helmet**: Segurança HTTP
- **morgan**: Logging de requisições
- **dotenv**: Variáveis de ambiente
- **nodemailer**: Envio de emails
- **express-rate-limit**: Rate limiting

### Desenvolvimento
- **nodemon**: Auto-reload durante desenvolvimento

## 🔒 Segurança

- Rate limiting: 100 requisições por IP a cada 15 minutos
- Helmet: Headers de segurança HTTP
- CORS configurado para domínios específicos
- Validação de entrada nos endpoints

## 📊 Monitoramento

- Health check em `/api/health`
- Logging de todas as requisições
- Tratamento de erros centralizado

## 🚀 Deploy

O backend está configurado para rodar na porta 3001 e pode ser facilmente deployado em:
- Digital Ocean Droplets
- Heroku
- AWS EC2
- Vercel (serverless)

## 📝 Logs

Em produção, todos os logs são salvos e podem ser monitorados via:
```bash
# Ver logs do PM2
pm2 logs decastro-api

# Ver logs em tempo real
pm2 logs decastro-api --lines 100
```

