# 🚀 MIGREI_POP - Quick Reference

## ⚡ Execução Rápida (1 Comando)

```powershell
# Execute após cada implementação (COM LIMPEZA DE CACHE):
cd d:\MIGREI_POP
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; rm -r dist -Force -ErrorAction SilentlyContinue; rm -r .vite -Force -ErrorAction SilentlyContinue; npm run lint; npm run check; npm run build; npm run dev
```

Depois abra: **http://localhost:3000**

---

## 📋 Rotina Manual Passo-a-Passo

### 0️⃣ **Limpar Cache (OBRIGATÓRIO)**
```powershell
# Matar processos
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Limpar caches
rm -r dist -Force -ErrorAction SilentlyContinue
rm -r .vite -Force -ErrorAction SilentlyContinue
rm -r node_modules/.vite -Force -ErrorAction SilentlyContinue

# Esperar
Start-Sleep -Seconds 2
```

### 1️⃣ **Validar Código**
```powershell
npm run lint
npm run check
```

### 2️⃣ **Compilar**
```powershell
npm run build
```

### 3️⃣ **Reiniciar Servidor**
```powershell
# Matar processos anteriores
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Esperar 2 segundos
Start-Sleep -Seconds 2

# Iniciar novo
npm run dev
```

### 4️⃣ **Abrir Browser**
- Vá para: **http://localhost:3000**
- Ou **http://192.168.0.6:3000** (rede local)

### 5️⃣ **Fazer Commit**
```powershell
git add -A
git commit -m "feat: descrição do que foi feito"
git push origin main
```

---

## 🔧 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (Vite) |
| `npm run build` | Compila para produção |
| `npm run lint` | Verifica erros com ESLint |
| `npm run check` | Verifica tipos com TypeScript |
| `npm run preview` | Visualiza build de produção |

---

## 📁 Estrutura de Pastas

```
src/
├── pages/              ← Páginas principais
│   ├── Home.tsx        ← Hero + Serviços + Investimento
│   ├── ParaEmpresas.tsx ← Processo + Pricing
│   ├── Sobre.tsx       ← Lei 15.269/2025
│   └── ...
├── components/         ← Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── services/          ← Integração com backend
│   └── supabase.ts
├── App.tsx            ← Rotas principales
└── constants.ts       ← Constantes globais
```

---

## 🛠️ Troubleshooting

### ❌ Tela Branca no Browser?
```powershell
# Limpar cache
rm -r dist -Force; rm -r .vite -Force

# Reiniciar tudo
npm run build
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2
npm run dev
```

### ❌ Porta 3000 em uso?
```powershell
# Ver o que está usando a porta
netstat -ano | findstr ":3000"

# Matar processo (substitua PID)
taskkill /PID [PID] /F
```

### ❌ ESLint/TypeScript Errors?
```powershell
# Ver erro completo
npm run check -- --listFiles

# Tentar corrigir automaticamente
npm run lint -- --fix
```

---

## ✨ Features Principais

### Home Page
- ✅ Hero com economia destacada
- ✅ Seção de Serviços Completos
- ✅ Seção Investimento em Consultoria
- ✅ Múltiplos CTAs para /empresas
- ✅ Social proof (500+ clientes)

### Para Empresas
- ✅ Processo com 6 etapas interativas (modals)
- ✅ Calculadora de economia
- ✅ 3 planos de precificação
- ✅ FAQ completo
- ✅ Todos CTAs → Google Forms

### Sobre
- ✅ Lei 15.269/2025 detalhada
- ✅ 4 pilares regulatórios
- ✅ Timeline visual (Grupo A/B)
- ✅ Ecossistema MIGREI

### Notícias
- ✅ 6 artigos sobre MLE
- ✅ Lei 15.269/2025 em destaque
- ✅ Social proof com datas recentes

---

## 🎯 Fluxo de Conversão

```
Home Page
    ↓
"Descobrir Potencial de Economia" (CTA 1)
    ↓
Para Empresas (/empresas)
    ↓
Calculadora (preenche dados)
    ↓
"Agendar Reunião" (CTA 2)
    ↓
Google Forms (Google Forms link)
    ↓
Lead capturado
```

---

## 📊 Stack Técnico

- **Framework:** React 19.0.0
- **Linguagem:** TypeScript 5.8.3
- **Build:** Vite 6.4.1
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router 7
- **Styling:** Tailwind CSS
- **Backend:** Supabase
- **Quality:** ESLint v8 + Prettier

---

## 🔐 Variáveis de Ambiente

```
# .env.local (não commitado)
VITE_SUPABASE_URL=xxxxx
VITE_SUPABASE_ANON_KEY=xxxxx
VITE_GOOGLE_FORMS_LINK=https://forms.gle/xxxxx
```

---

## 📈 Performance

- **Build Size:** ~1.4MB (gzipped: ~380KB)
- **Dev Server Start:** ~400ms
- **Lighthouse:** 90+ em desktop

---

## 🚀 Deploy

Quando pronto para produção:

```powershell
# 1. Verificar tudo
npm run lint; npm run check; npm run build

# 2. Deploy (será integrado com CI/CD)
# Plataformas suportadas: Vercel, Netlify, GitHub Pages
```

---

## 📞 Suporte

- **Documentação:** Ver `VERIFICATION_ROUTINE.md`
- **Issues:** Verificar console (F12)
- **Logs:** Terminal onde `npm run dev` está rodando

---

**Última atualização:** 04/12/2025  
**Versão:** 1.0  
**Status:** ✅ Em Produção
