@echo off
echo.
echo ========================================
echo    DE CASTRO CONSTRUTORA - WEBSITE
echo ========================================
echo.
echo Verificando dependencias...
echo.

if not exist "node_modules" (
    echo Instalando dependencias pela primeira vez...
    npm install --legacy-peer-deps
    echo.
)

echo Iniciando servidor de desenvolvimento...
echo.
echo O site sera aberto em: http://localhost:5173/
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.

npm start

