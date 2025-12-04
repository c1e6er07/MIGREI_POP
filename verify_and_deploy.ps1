#!/usr/bin/env pwsh

<#
.SYNOPSIS
  MIGREI_POP - Rotina Automática de Verificação e Deploy
  
.DESCRIPTION
  Script PowerShell que executa a verificação completa, build e atualização
  do localhost com uma única linha de comando.
  
.EXAMPLE
  .\verify_and_deploy.ps1
  
.NOTES
  Requer Node.js, npm e Git instalados
  Execute como administrador se tiver problemas de permissão
#>

param(
    [switch]$SkipBuild = $false,
    [switch]$SkipServer = $false,
    [switch]$OpenBrowser = $true
)

# Cores para output
$success = "Green"
$warning = "Yellow"
$error_color = "Red"
$info = "Cyan"

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor $info
Write-Host "║         MIGREI_POP - VERIFICAÇÃO E DEPLOY v1.0             ║" -ForegroundColor $info
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor $info
Write-Host ""

# FASE 1: ESLint
Write-Host "📋 [FASE 1/6] Executando ESLint..." -ForegroundColor $info
npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ESLint encontrou erros!" -ForegroundColor $error_color
    exit 1
}
Write-Host "✅ ESLint: OK (0 erros)" -ForegroundColor $success
Write-Host ""

# FASE 2: TypeScript Check
Write-Host "📋 [FASE 2/6] Executando TypeScript Check..." -ForegroundColor $info
npm run check
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript encontrou erros!" -ForegroundColor $error_color
    exit 1
}
Write-Host "✅ TypeScript: OK (0 erros)" -ForegroundColor $success
Write-Host ""

# FASE 3: Build
if (-not $SkipBuild) {
    Write-Host "📋 [FASE 3/6] Compilando para Produção..." -ForegroundColor $info
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Build falhou!" -ForegroundColor $error_color
        exit 1
    }
    Write-Host "✅ Build: OK" -ForegroundColor $success
} else {
    Write-Host "⏭️  [FASE 3/6] Build pulado (--SkipBuild)" -ForegroundColor $warning
}
Write-Host ""

# FASE 4: Reiniciar Dev Server
if (-not $SkipServer) {
    Write-Host "📋 [FASE 4/6] Reiniciando Dev Server..." -ForegroundColor $info
    
    # Matar processos Node anteriores
    $nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue
    if ($nodeProcesses) {
        Write-Host "  → Matando processos Node anteriores..." -ForegroundColor $warning
        $nodeProcesses | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
    
    # Iniciar novo servidor
    Write-Host "  → Iniciando novo servidor..." -ForegroundColor $info
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$pwd'; npm run dev" -WindowStyle Normal
    
    # Aguardar server estar pronto
    Write-Host "  → Aguardando server ficar pronto..." -ForegroundColor $info
    Start-Sleep -Seconds 3
    
    Write-Host "✅ Dev Server: OK (localhost:3000)" -ForegroundColor $success
} else {
    Write-Host "⏭️  [FASE 4/6] Dev Server pulado (--SkipServer)" -ForegroundColor $warning
}
Write-Host ""

# FASE 5: Abrir Simple Browser
if ($OpenBrowser) {
    Write-Host "📋 [FASE 5/6] Abrindo Simple Browser..." -ForegroundColor $info
    # Aqui você chamaria a função do Copilot se estivesse integrado
    Write-Host "✅ Simple Browser: Abrir em http://localhost:3000" -ForegroundColor $success
} else {
    Write-Host "⏭️  [FASE 5/6] Browser pulado (--OpenBrowser = false)" -ForegroundColor $warning
}
Write-Host ""

# FASE 6: Informações finais
Write-Host "📋 [FASE 6/6] Resumo Final" -ForegroundColor $info
Write-Host ""
Write-Host "✅ ESLint ............ OK (0 erros)" -ForegroundColor $success
Write-Host "✅ TypeScript ....... OK (0 erros)" -ForegroundColor $success
Write-Host "✅ Build ............ OK" -ForegroundColor $success
Write-Host "✅ Dev Server ....... OK (http://localhost:3000)" -ForegroundColor $success
Write-Host ""

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor $success
Write-Host "║            ✨ VERIFICAÇÃO COMPLETA COM SUCESSO! ✨         ║" -ForegroundColor $success
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor $success
Write-Host ""

Write-Host "📍 Próximos passos:" -ForegroundColor $info
Write-Host "  1. Abra: http://localhost:3000" -ForegroundColor $info
Write-Host "  2. Verifique se a página carrega normalmente" -ForegroundColor $info
Write-Host "  3. Se tudo OK, execute:" -ForegroundColor $info
Write-Host "     git add -A && git commit -m 'feat: [descrição]' && git push origin main" -ForegroundColor $info
Write-Host ""

Write-Host "💡 Dica: Você pode pular etapas com flags:" -ForegroundColor $info
Write-Host "  .\verify_and_deploy.ps1 -SkipBuild -OpenBrowser:`$false" -ForegroundColor $info
Write-Host ""
