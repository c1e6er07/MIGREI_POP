# Script protegido para iniciar servidor Vite
$host.UI.RawUI.WindowTitle = "🚀 MIGREI - Servidor Vite (NÃO FECHAR)"

Clear-Host
Write-Host "`n╔════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║       MIGREI - SERVIDOR DE DESENVOLVIMENTO         ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════╝`n" -ForegroundColor Green

Write-Host "⚠️  ATENÇÃO: NÃO FECHE ESTA JANELA!" -ForegroundColor Yellow
Write-Host "   O servidor ficará rodando enquanto você trabalha.`n" -ForegroundColor White

Write-Host "🌐 Servidor será iniciado em:" -ForegroundColor Cyan
Write-Host "   http://localhost:3000`n" -ForegroundColor White

Write-Host "🛑 Para PARAR o servidor:" -ForegroundColor Red
Write-Host "   Pressione Ctrl+C`n" -ForegroundColor White

Write-Host "⏳ Iniciando servidor...`n" -ForegroundColor Yellow

# Mudar para o diretório do projeto
Set-Location "d:\MIGREI_POP"

try {
	# Iniciar npm dev
	npm run dev

	Write-Host "`n✅ Servidor encerrado." -ForegroundColor Green
} catch {
	Write-Host "`n❌ Falha ao iniciar o servidor: $_" -ForegroundColor Red
	Write-Host "Verifique se as dependências estão instaladas (npm install) e tente novamente." -ForegroundColor Yellow
} finally {
	Write-Host "Pressione qualquer tecla para fechar..." -ForegroundColor Gray
	$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
