@echo off
echo.
echo ========================================
echo    INSTALACAO DE DEPENDENCIAS
echo ========================================
echo.
echo Limpando instalacao anterior...
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del package-lock.json
echo.
echo Instalando dependencias...
npm install --legacy-peer-deps
echo.
echo ========================================
echo    INSTALACAO CONCLUIDA!
echo ========================================
echo.
echo Para iniciar o projeto, execute: start.bat
echo Ou digite: npm start
echo.
pause

