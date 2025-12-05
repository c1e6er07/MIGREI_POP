# Script protegido para iniciar servidor Vite
# Previne fechamentos acidentais e mantém o servidor estável

$host.UI.RawUI.WindowTitle = "MIGREI - Servidor Vite (NÃO FECHAR)"

Write-Host "`n╔════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║       MIGREI - SERVIDOR DE DESENVOLVIMENTO         ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════╝`n" -ForegroundColor Green

Write-Host "⚠️  ATENÇÃO: NÃO FECHE ESTA JANELA!" -ForegroundColor Yellow
Write-Host "   O servidor ficará rodando enquanto você trabalha.`n" -ForegroundColor White

Write-Host "🌐 Servidor será iniciado em:" -ForegroundColor Cyan
Write-Host "   http://localhost:3000`n" -ForegroundColor White

Write-Host "🛑 Para PARAR o servidor:" -ForegroundColor Red
Write-Host "   Pressione Ctrl+C duas vezes`n" -ForegroundColor White

Write-Host "⏳ Iniciando servidor..." -ForegroundColor Yellow

# Mudar para o diretório do projeto
Set-Location "d:\MIGREI_POP"

# Loop infinito para reiniciar automaticamente em caso de crash
$attemptCount = 0
$maxAttempts = 3

while ($true) {
    $attemptCount++
    
    if ($attemptCount -gt $maxAttempts) {
        Write-Host "`n❌ Servidor falhou $maxAttempts vezes. Verifique os logs." -ForegroundColor Red
        Write-Host "Pressione qualquer tecla para tentar novamente..." -ForegroundColor Yellow
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        $attemptCount = 1
    }
    
    try {
        Write-Host "`n▶️  Tentativa $attemptCount - Iniciando Vite..." -ForegroundColor Cyan
        
        # Iniciar npm dev
        npm run dev
        
        # Se chegou aqui, foi parada intencional (Ctrl+C)
        Write-Host "`n✅ Servidor encerrado pelo usuário." -ForegroundColor Green
        break
        
    } catch {
        Write-Host "`n⚠️  Servidor caiu inesperadamente: $_" -ForegroundColor Yellow
        Write-Host "🔄 Reiniciando em 3 segundos..." -ForegroundColor Cyan
        Start-Sleep -Seconds 3
    }
}

Write-Host "`nPressione qualquer tecla para fechar..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
