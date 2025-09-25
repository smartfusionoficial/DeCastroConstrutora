@echo off
echo 🏗️ De Castro Construtora - Inicializador Windows
echo.

REM Verificar se estamos na pasta correta
if not exist "frontend" (
    echo ❌ ERRO: Pasta 'frontend' não encontrada
    echo Certifique-se de estar na pasta raiz do projeto DeCastroConstrutora
    echo.
    echo Estrutura esperada:
    echo DeCastroConstrutora/
    echo ├── frontend/
    echo ├── backend/
    echo └── INICIAR-WINDOWS.bat (este arquivo)
    echo.
    pause
    exit /b 1
)

echo ✅ Pasta frontend encontrada!
echo 📁 Navegando para a pasta frontend...
cd frontend

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERRO: Node.js não está instalado
    echo 📥 Por favor, instale o Node.js em: https://nodejs.org/
    echo 💡 Escolha a versão LTS (recomendada)
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js encontrado!

REM Verificar se package.json existe
if not exist "package.json" (
    echo ❌ ERRO: package.json não encontrado na pasta frontend
    echo.
    pause
    exit /b 1
)

echo ✅ package.json encontrado!

REM Instalar dependências se node_modules não existir
if not exist "node_modules" (
    echo 📦 Instalando dependências... (isso pode demorar alguns minutos)
    npm install
    if %errorlevel% neq 0 (
        echo ❌ ERRO: Falha ao instalar dependências
        echo 💡 Tente executar como Administrador
        echo.
        pause
        exit /b 1
    )
    echo ✅ Dependências instaladas com sucesso!
) else (
    echo ✅ Dependências já instaladas!
)

echo.
echo 🚀 Iniciando servidor de desenvolvimento...
echo 🌐 URL: http://localhost:5173
echo 📱 O navegador abrirá automaticamente
echo.
echo ⚠️ Para parar o servidor, pressione Ctrl+C
echo.

REM Iniciar o servidor
npm run dev

echo.
echo 👋 Servidor finalizado!
pause
