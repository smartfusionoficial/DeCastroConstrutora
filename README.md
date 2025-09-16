# De Castro Construtora - Projeto Completo

Site oficial da De Castro Construtora com arquitetura separada de frontend e backend.

## 🏗️ Estrutura do Projeto

```
decastro-construtora/
├── frontend/          # React + Vite (Interface do usuário)
├── backend/           # Node.js + Express (API)
└── README.md         # Este arquivo
```

## 🌐 URLs de Produção

- **Site**: https://www.decastroconstrutora.com.br
- **API**: https://api.decastroconstrutora.com.br

## 🚀 Frontend (React + Vite)

Interface moderna e responsiva desenvolvida em React com Vite.

### Funcionalidades
- ✅ Design responsivo para todos os dispositivos
- ✅ Animações modernas e efeitos parallax
- ✅ PWA (Progressive Web App)
- ✅ SEO otimizado
- ✅ Lazy loading de imagens
- ✅ WhatsApp integrado

### Empreendimentos
- **Bacutia** - LANÇAMENTO (30 amenidades, 6 áreas VIP)
- **Carolina Caliari** - CONCLUÍDO
- **Home Experience** - 100% VENDIDO
- **Chiabai Martins** - 100% VENDIDO/FINALIZADO
- **De Castro** - NOVO PROJETO

### Tecnologias
- React 18
- Vite 6
- Tailwind CSS
- Shadcn/UI
- Framer Motion
- React Router DOM

## 🔧 Backend (Node.js + Express)

API RESTful para gerenciar dados e funcionalidades do site.

### Endpoints Principais
- `/api/empreendimentos` - Dados dos empreendimentos
- `/api/contato` - Sistema de contato
- `/api/noticias` - Notícias e artigos
- `/api/health` - Health check

### Tecnologias
- Node.js 18+
- Express.js
- CORS configurado
- Rate limiting
- Nodemailer (emails)
- Helmet (segurança)

## 🛠️ Instalação e Execução

### Frontend
```bash
cd frontend
npm install
npm run dev    # Desenvolvimento
npm run build  # Produção
```

### Backend
```bash
cd backend
npm install
cp .env.example .env  # Configurar variáveis
npm run dev    # Desenvolvimento
npm start      # Produção
```

## 🚀 Deploy

### Frontend (Nginx)
```bash
# Build do projeto
cd frontend && npm run build

# Servir com Nginx
# Arquivos em: frontend/dist/
```

### Backend (PM2)
```bash
# Instalar PM2
npm install -g pm2

# Executar backend
cd backend
pm2 start server.js --name "decastro-api"
pm2 save
pm2 startup
```

## 🔧 Configuração do Servidor

### Nginx (Frontend)
```nginx
server {
    listen 80;
    server_name www.decastroconstrutora.com.br;
    root /var/www/decastro/frontend/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Nginx (Backend Proxy)
```nginx
server {
    listen 80;
    server_name api.decastroconstrutora.com.br;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🔒 Segurança

- HTTPS com SSL/TLS (Let's Encrypt)
- Rate limiting na API
- CORS configurado
- Headers de segurança (Helmet)
- Validação de entrada

## 📊 Monitoramento

- Health check da API
- Logs centralizados
- PM2 para gerenciamento de processos
- Nginx para proxy reverso

## 🎯 Funcionalidades Principais

### Site
- Página inicial com hero section
- Seção de empreendimentos
- Página institucional
- Seção Vila Velha
- Notícias e artigos
- Formulário de contato
- WhatsApp integrado

### API
- Listagem de empreendimentos
- Sistema de contato por email
- Gerenciamento de notícias
- Health check e monitoramento

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🎨 Design

- Cores: Dourado (#D4AF37) e tons escuros
- Tipografia: Inter (sistema)
- Animações: Framer Motion
- Ícones: Lucide React
- Componentes: Shadcn/UI

## 📞 Contato

- **Empresa**: De Castro Construtora
- **Localização**: Vila Velha/ES
- **Site**: https://www.decastroconstrutora.com.br
- **Email**: contato@decastroconstrutora.com.br

---

**Desenvolvido com ❤️ para De Castro Construtora**

