# 🚀 Scripts de Servidor - MIGREI

## 📂 Arquivos Disponíveis

### 1. `start-server.bat` (RECOMENDADO)
**Uso:** Duplo clique no arquivo
- ✅ Janela com título identificável
- ✅ Auto-reinício em caso de crash
- ✅ Avisos visuais para não fechar
- ✅ Instruções claras na tela

### 2. `start-server.ps1`
**Uso:** PowerShell script avançado
- Loop infinito de proteção
- Reinício automático (até 3 tentativas)
- Logs detalhados
- Título da janela customizado

## 🎯 Como Usar

### Método 1: Atalho BAT (Mais Fácil)
```bash
1. Navegue até a pasta D:\MIGREI_POP
2. Duplo clique em "start-server.bat"
3. Aguarde mensagem "Local: http://localhost:3000/"
4. Mantenha a janela aberta enquanto trabalha
```

### Método 2: PowerShell Script
```powershell
cd D:\MIGREI_POP
powershell -ExecutionPolicy Bypass -File start-server.ps1
```

### Método 3: Comando Direto (Tradicional)
```bash
cd D:\MIGREI_POP
npm run dev
```

## ⚠️ IMPORTANTE

### ❌ NÃO Feche a Janela do Servidor
- O servidor precisa ficar rodando
- Fechar = site para de funcionar
- Use Ctrl+C para parar corretamente

### ✅ Proteções Implementadas
- **Título da janela:** "MIGREI - Servidor Vite (NÃO FECHAR)"
- **Auto-reinício:** Em caso de crash inesperado
- **Avisos visuais:** Cores e mensagens destacadas
- **Tentativas múltiplas:** Até 3 reinícios automáticos

## 🛑 Para Parar o Servidor

1. Vá até a janela do servidor
2. Pressione `Ctrl+C` duas vezes
3. Ou feche a janela (se necessário)

## 🔄 Reiniciar Servidor

Se precisar reiniciar:
```bash
1. Pare o servidor atual (Ctrl+C)
2. Execute start-server.bat novamente
```

## 📊 Verificar Status

Para ver se está rodando:
```powershell
# Verificar porta 3000
netstat -ano | findstr :3000

# Verificar processo Node
tasklist | findstr node.exe
```

## 🌐 URL do Servidor

Após iniciar, acesse:
- **Local:** http://localhost:3000
- **Rede:** http://192.168.x.x:3000

## 💡 Dicas

1. **Mantenha a janela visível** na barra de tarefas
2. **Pin** o atalho start-server.bat na área de trabalho
3. **Adicione ao Startup** (opcional) para iniciar automaticamente
4. **Use Simple Browser** do VSCode para testar durante desenvolvimento

## 🐛 Troubleshooting

### Porta 3000 já em uso?
```powershell
# Matar processo na porta 3000
netstat -ano | findstr :3000
taskkill /PID [numero_do_pid] /F
```

### Servidor não inicia?
```bash
# Limpar cache e reinstalar
npm run clean
rm -rf node_modules
npm install
```

### Erro de permissão?
```powershell
# Executar como administrador
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

---

**Última atualização:** 05/12/2025
**Versão Vite:** 6.4.1
