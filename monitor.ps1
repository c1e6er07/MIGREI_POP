# Script de Monitoramento e Reinicialização Automática
# Mantém o servidor sempre rodando

$porta = 3000
$maxRetries = 3
$retryCount = 0

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  MIGREI APP - Monitor de Servidor" -ForegroundColor White
Write-Host "========================================`n" -ForegroundColor Cyan

function Test-ServerRunning {
    $process = Get-Process | Where-Object {$_.ProcessName -match "node"}
    return $null -ne $process
}

function Start-Server {
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Iniciando servidor..." -ForegroundColor Yellow
    
    # Limpar processos anteriores
    Get-Process | Where-Object {$_.ProcessName -match "node"} | Stop-Process -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
    
    # Iniciar novo servidor
    $job = Start-Job -ScriptBlock {
        Set-Location $using:PWD
        npm run dev 2>&1
    }
    
    Start-Sleep -Seconds 3
    
    if (Test-ServerRunning) {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] ✓ Servidor iniciado!" -ForegroundColor Green
        Write-Host "`n  URLs disponíveis:" -ForegroundColor Cyan
        Write-Host "  • http://127.0.0.1:$porta" -ForegroundColor Yellow
        Write-Host "  • http://192.168.0.6:$porta`n" -ForegroundColor Yellow
        return $job
    } else {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] ✗ Falha ao iniciar servidor" -ForegroundColor Red
        return $null
    }
}

# Iniciar servidor
$serverJob = Start-Server

if ($null -eq $serverJob) {
    Write-Host "`n[ERRO] Não foi possível iniciar o servidor." -ForegroundColor Red
    exit 1
}

# Abrir navegador
Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Abrindo navegador..." -ForegroundColor Cyan
Start-Sleep -Seconds 1
Start-Process "http://127.0.0.1:$porta"

Write-Host "`n[INFO] Monitorando servidor..." -ForegroundColor Gray
Write-Host "[INFO] Pressione CTRL+C para parar`n" -ForegroundColor Gray

# Loop de monitoramento
try {
    while ($true) {
        Start-Sleep -Seconds 5
        
        if (-not (Test-ServerRunning)) {
            Write-Host "`n[$(Get-Date -Format 'HH:mm:ss')] ⚠ Servidor parou!" -ForegroundColor Yellow
            
            if ($retryCount -lt $maxRetries) {
                $retryCount++
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Tentativa $retryCount de $maxRetries..." -ForegroundColor Yellow
                
                # Limpar job anterior
                if ($serverJob) {
                    Stop-Job $serverJob -ErrorAction SilentlyContinue
                    Remove-Job $serverJob -ErrorAction SilentlyContinue
                }
                
                # Reiniciar servidor
                $serverJob = Start-Server
                
                if ($null -eq $serverJob) {
                    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] ✗ Falha na reinicialização" -ForegroundColor Red
                    break
                }
            } else {
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] ✗ Número máximo de tentativas atingido" -ForegroundColor Red
                break
            }
        } else {
            # Reset retry count se servidor está rodando
            if ($retryCount -gt 0) {
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] ✓ Servidor estável" -ForegroundColor Green
                $retryCount = 0
            }
        }
    }
} finally {
    Write-Host "`n[$(Get-Date -Format 'HH:mm:ss')] Parando servidor..." -ForegroundColor Yellow
    
    if ($serverJob) {
        Stop-Job $serverJob -ErrorAction SilentlyContinue
        Remove-Job $serverJob -ErrorAction SilentlyContinue
    }
    
    Get-Process | Where-Object {$_.ProcessName -match "node"} | Stop-Process -Force -ErrorAction SilentlyContinue
    
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] ✓ Servidor parado`n" -ForegroundColor Gray
}
