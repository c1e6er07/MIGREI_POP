@echo off
title MIGREI - Servidor Vite (NAO FECHAR)
color 0A
echo.
echo ========================================
echo    MIGREI - Servidor de Desenvolvimento
echo ========================================
echo.
echo Iniciando servidor protegido...
echo.
powershell -NoExit -ExecutionPolicy Bypass -File "%~dp0start-server-simple.ps1"
