# Script PowerShell para iniciar o projeto De Castro Construtora no Windows
Write-Host "🏗️  Iniciando projeto De Castro Construtora no Windows..." -ForegroundColor Green
Write-Host ""

# Verificar se Node.js está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERRO: Node.js não está instalado ou não está no PATH" -ForegroundColor Red
    Write-Host "Por favor, instale o Node.js em https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Verificar se npm está instalado
try {
    $npmVersion = npm --version
    Write-Host "✅ npm encontrado: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ERRO: npm não está instalado" -ForegroundColor Red
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Host ""

# Verificar se estamos na pasta correta
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERRO: package.json não encontrado" -ForegroundColor Red
    Write-Host "Certifique-se de estar na pasta 'frontend' do projeto" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Instalar dependências se node_modules não existir
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ ERRO: Falha ao instalar dependências" -ForegroundColor Red
        Read-Host "Pressione Enter para sair"
        exit 1
    }
    Write-Host "✅ Dependências instaladas com sucesso!" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Iniciando servidor de desenvolvimento..." -ForegroundColor Cyan
Write-Host "🌐 O site será aberto automaticamente no navegador" -ForegroundColor Cyan
Write-Host "📍 URL: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  Para parar o servidor, pressione Ctrl+C" -ForegroundColor Yellow
Write-Host ""

# Iniciar o servidor usando a configuração específica do Windows
npm run dev -- --config vite.config.windows.js --host 0.0.0.0

Read-Host "Pressione Enter para sair"
