# MIGREI_POP — Plataforma de Gestão Energética

Sistema completo de gestão para o Mercado Livre de Energia com IA integrada, franquias multi-tenant e compliance automatizado.

[![CI](https://github.com/c1e6er07/MIGREI_POP/actions/workflows/ci.yml/badge.svg)](https://github.com/c1e6er07/MIGREI_POP/actions/workflows/ci.yml)

🌐 **URL**: http://localhost:3000  
📱 **Stack**: React 19 + TypeScript + Vite + Supabase + Gemini AI

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ (recomendado 20+)

### Setup

```bash
# 1. Instalar dependências
npm install

# 2. Criar .env.local com:
cp .env.example .env.local
# Adicionar: VITE_GEMINI_API_KEY=sua_chave
# Opcional: VITE_ADMIN_PASSWORD=sua_senha

# 3. Iniciar servidor
npm run dev

# 4. Abrir navegador
# http://localhost:3000
```

---

## 📋 Comandos

```bash
npm run dev          # Iniciar dev server
npm run build        # Build para produção
npm run lint         # Verificar código
npm run check        # Type checking
npm run format       # Formatar código
```

---

## 📁 Estrutura

```
├── pages/            # Páginas React
├── components/       # Componentes reutilizáveis
├── layouts/          # Layouts (Dashboard, Auth)
├── contexts/         # Context API
├── services/         # Serviços (API, Auth, Supabase)
├── types.ts          # Types TypeScript
├── constants.ts      # Constantes globais
└── index.tsx         # Entry point
```

---

## 🔑 Variáveis de Ambiente

```env
VITE_GEMINI_API_KEY=sk-xxx          # Google Gemini API
VITE_ADMIN_PASSWORD=senha123        # Password para admin
```

---

## 🎯 Funcionalidades Principais

✅ Dashboard de consumo energético  
✅ Calculadora de economia  
✅ MIGREI IA (Assistente com Gemini)  
✅ MIGREI Bank (Pagamentos Open Finance)  
✅ Para Empresas (Propostas)  
✅ Compliance & Riscos  
✅ Relatórios & Análises  
✅ Multi-tenant Franquias  

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **UI**: Tailwind CSS, Lucide Icons, Framer Motion
- **State**: React Context, Supabase
- **API**: Gemini AI, Open Finance
- **Auth**: Supabase Auth
- **Database**: Supabase PostgreSQL

---

## 📝 Licença

Propriedade intelectual da MIGREI MLE CONSULT.

---

**Desenvolvido com ❤️ para o Mercado Livre de Energia**
