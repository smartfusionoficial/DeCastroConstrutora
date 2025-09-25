@echo off
echo Iniciando projeto De Castro Construtora no Windows...
echo.

REM Verificar se Node.js está instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js não está instalado ou não está no PATH
    echo Por favor, instale o Node.js em https://nodejs.org/
    pause
    exit /b 1
)

REM Verificar se npm está instalado
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: npm não está instalado
    pause
    exit /b 1
)

echo Node.js e npm encontrados!
echo.

REM Instalar dependências se node_modules não existir
if not exist "node_modules" (
    echo Instalando dependências...
    npm install
    if %errorlevel% neq 0 (
        echo ERRO: Falha ao instalar dependências
        pause
        exit /b 1
    )
)

echo.
echo Iniciando servidor de desenvolvimento...
echo O site será aberto automaticamente no navegador
echo URL: http://localhost:5173
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.

REM Iniciar o servidor usando a configuração específica do Windows
npm run dev -- --config vite.config.windows.js

pause
