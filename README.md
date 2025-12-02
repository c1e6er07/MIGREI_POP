<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# MIGREI_POP — Plataforma de Gestão Energética

Sistema completo de gestão para o Mercado Livre de Energia com IA integrada, franquias multi-tenant e compliance automatizado.

[![CI](https://github.com/c1e6er07/MIGREI_POP/actions/workflows/ci.yml/badge.svg)](https://github.com/c1e6er07/MIGREI_POP/actions/workflows/ci.yml)

🌐 **URL Local**: http://127.0.0.1:3000 *(use este ao invés de localhost)*  
📱 **Tech Stack**: React 19 + TypeScript + Vite + Supabase + Gemini AI

---

## 🚀 Início Rápido

### Método 1: Script Automático (Recomendado)

**Windows (PowerShell):**
```powershell
.\start.ps1
```

**Windows (CMD):**
```cmd
start.bat
```

### Método 2: Manual

**Pré-requisitos:** Node.js 18+ (recomendado 20+)

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   - Copie `.env.example` para `.env`
   - Adicione sua `GEMINI_API_KEY`

3. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

4. **Abrir no navegador:**
   - Acesse: **http://127.0.0.1:3000** *(não use localhost)*
   - Ou acesse pelo IP da rede: http://192.168.0.6:3000
   - Ou execute: `Start-Process "http://127.0.0.1:3000"` (PowerShell)

---

## ⚠️ IMPORTANTE - Problema com Localhost

Se você encontrar problemas acessando `http://localhost:3000` em navegadores externos:

- ✅ **USE**: `http://127.0.0.1:3000`
- ❌ **NÃO USE**: `http://localhost:3000`

**Motivo:** Windows pode resolver `localhost` para IPv6 (::1), causando problemas de conexão.

📖 **Mais detalhes:** Veja [LOCALHOST_FIX.md](./LOCALHOST_FIX.md)

---

## 📋 Comandos Disponíveis
