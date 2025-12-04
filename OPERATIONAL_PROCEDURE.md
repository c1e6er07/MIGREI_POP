# 🎯 PROCEDIMENTO OPERACIONAL PADRÃO (POP)
# Verificação, Validação e Deploy - MIGREI_POP

## Momento de Execução
**Quando:** Ao final de cada etapa de implementação/ajuste
**Tempo Estimado:** 2-3 minutos
**Responsável:** Copilot/Desenvolvedor

---

## PRÉ-CONDIÇÕES
- ✅ Alterações foram salvas em arquivo(s)
- ✅ Você está no diretório: `d:\MIGREI_POP`
- ✅ Terminal PowerShell aberto
- ✅ Node.js e npm instalados

---

## PASSO 0: LIMPEZA DE CACHE (OBRIGATÓRIO) (10-15s)

### ⚠️ SEMPRE executar primeiro para evitar tela branca

```powershell
# Matar processos Node anteriores
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Limpar todos os caches
rm -r dist -Force -ErrorAction SilentlyContinue
rm -r .vite -Force -ErrorAction SilentlyContinue
rm -r node_modules/.vite -Force -ErrorAction SilentlyContinue

# Aguardar
Start-Sleep -Seconds 2
```

### Resultado Esperado:
```
[Comandos executados sem erros]
Caches limpos com sucesso
```

---

## PASSO 1: VALIDAÇÃO DE LINT (60-90s)

### Executar:
```powershell
npm run lint
```

### Resultado Esperado:
```
> migrei-pop@0.0.0 lint
> eslint . --ext .ts,.tsx

[comando termina sem output = sucesso]
```

### Se houver erro:
```powershell
# Ver qual arquivo tem problema
npm run lint -- --debug

# Tentar corrigir automaticamente
npm run lint -- --fix

# Se não resolver: verificar arquivo com Copilot
```

---

## PASSO 2: VERIFICAÇÃO DE TIPOS (60-90s)

### Executar:
```powershell
npm run check
```

### Resultado Esperado:
```
> migrei-pop@0.0.0 check
> tsc --noEmit

[comando termina sem output = sucesso]
```

### Se houver erro:
```powershell
# Ver erros específicos
npm run check -- --listFiles

# Pedii ao Copilot para analisar erro
# Erros de TypeScript geralmente são de tipos ou imports faltantes
```

---

## PASSO 3: BUILD DE PRODUÇÃO (10-15s)

### Executar:
```powershell
npm run build
```

### Resultado Esperado:
```
vite v6.4.1 building for production...
✓ 2853 modules transformed.
dist/index.html                    2.56 kB │ gzip:   1.22 kB
dist/assets/index-XXXXX.js  1,XXX.XX kB │ gzip: XXX.XX kB

(!) Some chunks are larger than 500 kB
✓ built in 10-15s
```

### ⚠️ Aviso de chunk size é NORMAL
**Não é erro.** Pode ser otimizado depois com code-splitting.

### Se build falhar:
```powershell
# Opção 1: Tentar novamente
npm run build

# Opção 2: Limpar cache
rm -r dist -Force; rm -r .vite -Force
npm run build

# Opção 3: Reinstalar tudo
rm -r node_modules -Force
npm install
npm run build
```

---

## PASSO 4: REINICIAR DEV SERVER (5-10s)

### Executar em ETAPAS:

#### 4.1 - Matar processos Node anteriores:
```powershell
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
```

**Resultado esperado:** Nenhuma mensagem (silencioso é sucesso)

#### 4.2 - Aguardar 2 segundos:
```powershell
Start-Sleep -Seconds 2
```

#### 4.3 - Iniciar novo servidor (BACKGROUND):
```powershell
npm run dev &
```

**Resultado esperado:**
```
VITE v6.4.1  ready in 387 ms

➜  Local:   http://localhost:3000/
➜  Network: http://192.168.0.6:3000/
```

### Se servidor não iniciar:
```powershell
# Verificar se porta está em uso
netstat -ano | findstr ":3000"

# Se estiver em uso: matar processo
taskkill /PID [PID_DO_RESULTADO_ACIMA] /F

# Tentar novamente
npm run dev
```

---

## PASSO 5: VALIDAÇÃO NO BROWSER (5-10s)

### Via Simple Browser (integrado no VS Code):
```
Abrir: http://localhost:3000
```

### Verificar:
- ✅ Página carrega SEM ERRO
- ✅ Sem tela branca
- ✅ Sem mensagens de erro no console (F12)
- ✅ Elementos aparecem visíveis
- ✅ Animações funcionam suave
- ✅ Botões respondem ao hover
- ✅ Links funcionam (redirect correto)

### Se houver tela branca:

#### Cenário 1: Erro na compilação
```powershell
# Verificar console (F12 → Console)
# Se há erro, compartilhar com Copilot
```

#### Cenário 2: Cache corrompido
```powershell
# Limpar completamente
rm -r dist -Force
rm -r .vite -Force
rm -r node_modules -Force

# Reinstalar
npm install

# Recompilar e restart
npm run build
npm run dev
```

#### Cenário 3: Aguardar mais tempo
```powershell
# Às vezes Vite demora mais para hot reload
# Aguardar 5-10 segundos
# Se persistir, fazer refresh (Ctrl+F5)
```

---

## PASSO 6: GIT COMMIT & PUSH (10-20s)

### Executar em SEQUÊNCIA:

#### 6.1 - Adicionar alterações:
```powershell
git add -A
```

**Resultado esperado:** Nenhuma mensagem

#### 6.2 - Fazer commit:
```powershell
git commit -m "feat: descrição breve do que foi feito"
```

**Resultado esperado:**
```
[main 0af6de4] feat: descrição breve...
 X files changed, YYY insertions(+), ZZZ deletions(-)
```

#### 6.3 - Fazer push:
```powershell
git push origin main
```

**Resultado esperado:**
```
To https://github.com/c1e6er07/MIGREI_POP.git
   commit1..commit2  main -> main
```

### Se houver conflito de git:
```powershell
# Ver status
git status

# Ver diferenças
git diff

# Se conflito: resolver manualmente e fazer novo commit
```

---

## ✅ ROTINA COMPLETA EM UMA LINHA

```powershell
npm run lint && npm run check && npm run build && Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; npm run dev & Start-Sleep -Seconds 3
```

**Depois:** Abrir http://localhost:3000

---

## 📊 CHECKLIST FINAL

Antes de considerar "concluído", verificar:

- [ ] ESLint: 0 erros (npm run lint)
- [ ] TypeScript: 0 erros (npm run check)
- [ ] Build: Sucesso (npm run build)
- [ ] Dev Server: Ready (VITE ready em...)
- [ ] localhost:3000: Aberto e funcionando
- [ ] Sem tela branca
- [ ] Sem erros no console (F12)
- [ ] Elementos visíveis e funcionais
- [ ] Animações suaves
- [ ] CTAs funcionam (cliques funcionam)
- [ ] Git: Committed com mensagem descritiva
- [ ] Git: Push para main

---

## 🚨 CENÁRIOS COMUNS E SOLUÇÕES

| Cenário | Solução |
|---------|---------|
| Lint error "X is never used" | Remover import não usado |
| TypeScript error "Type 'X' is not assignable" | Verificar tipo, usar Type assertion se necessário |
| Build error "Cannot find module" | npm install, limpar node_modules |
| Tela branca no browser | Limpar dist/.vite, restart server |
| Porta 3000 em uso | Matar processo node, restart |
| Git push rejected | Fazer git pull antes de push |

---

## 💡 DICAS PRO

1. **Abrir dois terminais:**
   - Terminal 1: `npm run dev` (sempre rodando)
   - Terminal 2: Comandos diversos (lint, build, git)

2. **Usar git status frequentemente:**
   ```powershell
   git status
   ```

3. **Verificar browser ANTES de fazer push:**
   - Sempre validar visual antes de commitar

4. **Mensagens de commit descritivas:**
   - ❌ "fix"
   - ✅ "fix: remove unused import from Home.tsx"
   - ✅ "feat: add pricing section to ParaEmpresas"

5. **Trabalhar com hot reload:**
   - Vite faz reload automático
   - Não precisa reiniciar server para mudanças simples
   - Só reiniciar se: import novo, type novo, arquivo deletado

---

## 📈 MÉTRICAS DE SUCESSO

- **Tempo de verificação:** < 3 minutos
- **Fail rate:** 0% (todos os checks passam)
- **Tempo de build:** 8-15 segundos
- **Dev server start:** < 500ms
- **Commits diários:** 2-5
- **Push sem erros:** 100%

---

## 🔄 FREQUÊNCIA

**Executar esta rotina:**
- ✅ Após cada ajuste de código
- ✅ Antes de fazer push
- ✅ Ao fim do dia (verificação final)
- ✅ Quando receber bug reports

**Não precisa executar:**
- Se só está editando CSS (Vite faz HMR automático)
- Se só está adicionando comentários
- Se está apenas testando no browser (sem changes)

---

## 📞 SUPORTE RÁPIDO

Qualquer erro não listado aqui:

1. **Ler a mensagem de erro completamente**
2. **Google o erro exato** (copiar e colar)
3. **Compartilhar erro com Copilot**
4. **Copilot executará solução**

---

**Versão:** 1.0  
**Data:** 04/12/2025  
**Autor:** Copilot + Usuário  
**Status:** ✅ Ativo
