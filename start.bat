@echo off
REM Script de inicialização rápida do MIGREI App

echo.
echo ========================================
echo   MIGREI APP - Iniciando Servidor...
echo ========================================
echo.

REM Limpar cache se necessário (comentado por padrão)
REM if exist "node_modules\.vite" rmdir /s /q "node_modules\.vite"
REM if exist "dist" rmdir /s /q "dist"

echo [INFO] Iniciando servidor de desenvolvimento...
echo [INFO] Aguarde... (isso pode levar alguns segundos)
echo.

REM Iniciar servidor
start /B npm run dev

REM Aguardar 3 segundos
timeout /t 3 /nobreak > nul

echo.
echo ========================================
echo   SERVIDOR INICIADO!
echo ========================================
echo.
echo   URL: http://localhost:3000
echo.
echo   Abrindo navegador...
echo.

REM Abrir navegador
timeout /t 2 /nobreak > nul
REM Usar 127.0.0.1 ao invés de localhost para evitar problemas com IPv6
start http://127.0.0.1:3000

echo.
echo [INFO] Servidor rodando em segundo plano
echo [INFO] Pressione CTRL+C para parar
echo.

REM Manter janela aberta
pause
