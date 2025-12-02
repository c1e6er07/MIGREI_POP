# Script PowerShell para iniciar o MIGREI App
# Use: .\start.ps1

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  MIGREI APP - Iniciando Servidor..." -ForegroundColor White
Write-Host "========================================`n" -ForegroundColor Cyan

# Verificar se Node.js está instalado
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "[ERRO] Node.js não encontrado!" -ForegroundColor Red
    Write-Host "Por favor, instale Node.js: https://nodejs.org`n" -ForegroundColor Yellow
    exit 1
}

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Instalando dependências..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Parar processos Node existentes
Write-Host "[INFO] Limpando processos anteriores..." -ForegroundColor Gray
Get-Process | Where-Object {$_.ProcessName -match "node"} | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "[INFO] Iniciando servidor de desenvolvimento..." -ForegroundColor Cyan
Write-Host "[INFO] Aguarde... (isso pode levar alguns segundos)`n" -ForegroundColor Gray

# Iniciar servidor em janela separada
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev" -WindowStyle Normal

# Aguardar servidor inicializar
Write-Host "[INFO] Aguardando servidor iniciar..." -ForegroundColor Gray
Start-Sleep -Seconds 5

# Verificar se servidor está rodando
$nodeProcess = Get-Process | Where-Object {$_.ProcessName -match "node"}
if ($nodeProcess) {
    Write-Host "`n========================================" -ForegroundColor Cyan
    Write-Host "  SERVIDOR INICIADO COM SUCESSO!" -ForegroundColor Green
    Write-Host "========================================`n" -ForegroundColor Cyan
    Write-Host "  URLs disponíveis:" -ForegroundColor White
    Write-Host "  - http://127.0.0.1:3000" -ForegroundColor Yellow
    Write-Host "  - http://192.168.0.6:3000" -ForegroundColor Yellow
    Write-Host "  - http://localhost:3000`n" -ForegroundColor Yellow
    
    # Abrir navegador
    Write-Host "[INFO] Abrindo navegador..." -ForegroundColor Cyan
    Start-Sleep -Seconds 2
    Start-Process "http://127.0.0.1:3000"
    
    Write-Host "`n[INFO] Servidor rodando em janela separada" -ForegroundColor Green
    Write-Host "[INFO] Feche a janela do servidor para parar" -ForegroundColor Gray
} else {
    Write-Host "`n[ERRO] Falha ao iniciar servidor!" -ForegroundColor Red
    Write-Host "Tente executar manualmente: npm run dev" -ForegroundColor Yellow
    exit 1
}
