# Plano rápido de e2e (opcional)

Objetivo: smoke de navegação e formulário para garantir que páginas principais carregam e o formulário de Para Empresas envia.

Sugestão Playwright:
1) Instalar: `npm i -D @playwright/test` e `npx playwright install chromium`.
2) Criar `tests/e2e.spec.ts` com cenários:
   - Abrir `/` e validar headline da Home.
   - Navegar para `/para-empresas`, validar "Processo Completo de Migração" e CTA final.
   - Preencher formulário (dados fictícios) e interceptar POST para LeadService (pode mockar via `page.route` ou apontar para ambiente de teste).
   - Abrir `/franquia` e checar "Modelos de Franquia MIGREI" + CTA.
   - Abrir `/sobre` e checar "Open Finance Integration".
3) Rodar: `npx playwright test --ui` ou `npx playwright test`.

Alternativa Cypress:
- Instalar: `npm i -D cypress`.
- Criar `cypress/e2e/smoke.cy.ts` com as mesmas etapas.
- Rodar: `npx cypress open` (GUI) ou `npx cypress run`.

Notas:
- Use `baseURL` apontando para `npm run dev` em porta fixa (ex.: 5173).
- Para não atingir Supabase real, stub `LeadService`/requests com `page.route` (Playwright) ou `cy.intercept` (Cypress).
