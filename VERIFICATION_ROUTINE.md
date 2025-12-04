# 🔍 ROTINA DE VERIFICAÇÃO E ATUALIZAÇÃO - MIGREI_POP

## Objetivo
Garantir que toda implementação/ajuste seja validado, compilado e atualizado em tempo real no localhost e Simple Browser.

---

## ⚡ ROTINA EXECUTADA AO FINAL DE CADA ETAPA

### **FASE 1: Diagnóstico Inicial + Limpeza de Cache** (30-45s)
```powershell
# 1. Verificar se há erros no arquivo principal
Get-Errors [arquivo_modificado]

# 2. SEMPRE limpar cache de build (OBRIGATÓRIO para evitar tela branca)
rm -r dist -Force -ErrorAction SilentlyContinue
rm -r .vite -Force -ErrorAction SilentlyContinue
rm -r node_modules/.vite -Force -ErrorAction SilentlyContinue
```

**⚠️ IMPORTANTE:** A limpeza de cache agora é OBRIGATÓRIA em toda verificação para prevenir tela branca.

### **FASE 2: Validação de Código** (60-90s)
```powershell
# 3. ESLint - Verificar sintaxe e boas práticas
npm run lint

# 4. TypeScript - Verificar tipos
npm run check

# Esperado: 0 erros em ambos
```

### **FASE 3: Build de Produção** (10-15s)
```powershell
# 5. Compilar para produção
npm run build

# Esperado: ✓ built successfully (tempo varia, geralmente 8-15s)
# Aviso de chunk size é aceitável (otimizar depois)
```

### **FASE 4: Dev Server com Limpeza** (5-10s)
```powershell
# 6. Matar processos Node anteriores
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# 7. Limpar cache novamente
rm -r dist -Force -ErrorAction SilentlyContinue
rm -r .vite -Force -ErrorAction SilentlyContinue
rm -r node_modules/.vite -Force -ErrorAction SilentlyContinue

# 8. Aguardar 3 segundos para garantir limpeza completa
Start-Sleep -Seconds 3

# 8. Limpar cache novamente (garantir limpeza total)
rm -r dist -Force -ErrorAction SilentlyContinue
rm -r .vite -Force -ErrorAction SilentlyContinue

# 9. Iniciar novo servidor dev (BACKGROUND)
npm run dev

# Esperado: "VITE v6.4.1 ready in XXX ms"
#          "Local: http://localhost:3000/"
```

### **FASE 5: Validação no Browser** (5-10s)
```powershell
# 9. Aguardar servidor ficar pronto
Start-Sleep -Seconds 2

# 10. Abrir Simple Browser (dentro do VS Code)
open_simple_browser http://localhost:3000

# 11. Abrir navegador externo (padrão do sistema)
Start-Process "http://localhost:3000"

# 12. Verificar visualmente em AMBOS:
#     - Página carrega sem erros
#     - Sem tela branca
#     - Elementos visíveis
#     - Animações funcionam
#     - Alterações aplicadas corretamente
```

### **FASE 6: Git Commit & Push** (10-20s)
```powershell
# 11. Adicionar alterações ao índice
git add -A

# 12. Fazer commit com mensagem descritiva
git commit -m "feat: [descrição do que foi feito]"

# 13. Fazer push para GitHub
git push origin main

# Esperado: "To https://github.com/c1e6er07/MIGREI_POP.git"
#          "main -> main" (sucesso)
```

---

## 📋 CHECKLIST RÁPIDO

- [ ] ESLint: 0 erros
- [ ] TypeScript: 0 erros
- [ ] Build: ✓ sucesso
- [ ] Dev Server: Ready em localhost:3000
- [ ] Simple Browser: Página carrega normalmente
- [ ] Sem tela branca
- [ ] Animações funcionam
- [ ] CTAs funcionam (links)
- [ ] Formulários respondendo
- [ ] Git: Committed & Pushed

---

## 🚨 TROUBLESHOOTING

### **Tela Branca no Browser**
```powershell
# 1. Limpar cache
rm -r dist -Force; rm -r .vite -Force

# 2. Reinstalar dependências (se necessário)
rm -r node_modules -Force
npm install

# 3. Reiniciar dev server
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 3
npm run dev
```

### **ESLint/TypeScript Errors**
```powershell
# Ver erro específico
npm run check -- --listFiles

# Usar AI/Copilot para análise de erro
# (Copilot consegue ler mensagens de erro)
```

### **Build Falha**
```powershell
# Verificar se há syntax errors
npm run lint --fix

# Tentar build novamente
npm run build

# Se persistir: limpar tudo e reinstalar
rm -r node_modules dist .vite -Force
npm install
npm run build
```

### **Dev Server Não Inicia**
```powershell
# Porta 3000 em uso?
netstat -ano | findstr ":3000"

# Matar processo
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Aguardar 2-3 segundos
Start-Sleep -Seconds 3

# Tentar novamente
npm run dev
```

---

## 📍 LOCALIZAÇÃO DOS ARQUIVOS PRINCIPAIS

```
d:\MIGREI_POP\
├── pages/
│   ├── Home.tsx           ← Hero + Serviços + Investimento
│   ├── ParaEmpresas.tsx   ← Processo + Calculadora + Pricing
│   ├── Sobre.tsx          ← Lei 15.269/2025
│   ├── Noticias.tsx       ← Artigos sobre MLE
│   └── ...
├── components/
│   ├── Header.tsx         ← Navegação
│   ├── Footer.tsx         ← Rodapé
│   └── ...
├── App.tsx                ← Rotas
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## ✅ RESULTADO ESPERADO

Após executar a rotina completa:

```
✓ ESLint: 0 errors, 0 warnings
✓ TypeScript: 0 errors
✓ Build: Sucesso em ~10-15s
✓ Dev Server: VITE ready em 387ms
✓ localhost:3000: Aberto e funcionando
✓ Simple Browser: Página visível
✓ Git: Commited & Pushed
```

---

## 🎯 TEMPO TOTAL ESTIMADO: 2-3 MINUTOS

- Lint + Check: 60-90s
- Build: 10-15s
- Dev Server: 5-10s
- Browser: 5-10s
- Git: 10-20s

---

## 📌 COMANDOS RÁPIDOS (COPIE E COLE)

### **Rotina Completa em Uma Linha**
```powershell
npm run lint; npm run check; npm run build; Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; npm run dev &
```

### **Depois Abrir Browser**
```powershell
open_simple_browser http://localhost:3000
```

### **Commit & Push**
```powershell
git add -A; git commit -m "feat: [descrição]"; git push origin main
```

---

## 📚 RECURSOS

- **Vite Docs:** https://vitejs.dev/
- **ESLint:** https://eslint.org/
- **TypeScript:** https://www.typescriptlang.org/
- **Framer Motion:** https://www.framer.com/motion/
- **React Router:** https://reactrouter.com/

---

**Criado em: 04/12/2025**
**Última atualização: 04/12/2025**
**Status: Ativo e em uso**
