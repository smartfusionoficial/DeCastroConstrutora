#!/bin/bash

# Script de deploy para De Castro Construtora
# Executa build do frontend e deploy no servidor Digital Ocean

echo "🚀 Iniciando processo de deploy..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ] && [ ! -d "frontend" ]; then
    echo "❌ Erro: Execute este script na raiz do projeto"
    exit 1
fi

# Build do frontend
echo "📦 Fazendo build do frontend..."
cd frontend
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Erro no build do frontend"
    exit 1
fi
cd ..

# Fazer upload dos arquivos para o servidor
echo "📤 Enviando arquivos para o servidor..."

# Enviar frontend
echo "📁 Enviando frontend..."
scp -r frontend/dist/* root@159.65.40.68:/var/www/decastro/

# Enviar backend
echo "📁 Enviando backend..."
scp -r backend/* root@159.65.40.68:/var/www/decastro-api/

# Reiniciar serviços no servidor
echo "🔄 Reiniciando serviços no servidor..."
ssh root@159.65.40.68 << 'EOF'
    # Instalar dependências do backend se necessário
    cd /var/www/decastro-api
    npm install --production
    
    # Reiniciar PM2
    pm2 restart decastro-api || pm2 start server.js --name decastro-api
    
    # Reiniciar nginx
    systemctl reload nginx
    
    echo "✅ Serviços reiniciados com sucesso"
EOF

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Site disponível em: http://159.65.40.68"
echo "🔗 API disponível em: http://159.65.40.68/api"
