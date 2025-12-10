import { test, expect } from '@playwright/test';

// Smoke E2E: garante que rotas principais carregam e exibem CTAs essenciais.

test('home exibe hero e CTA', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.getByText(/Economize em Energia/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /Ver Nossa Solução/i })).toBeVisible();
});

test('sobre exibe hero de Quem Somos', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('navigation').getByRole('link', { name: /Quem Somos/i }).click();
  await expect(page.getByText(/Quem Somos MIGREI/i)).toBeVisible();
});

test('franquia exibe hero e CTA de reunião', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('navigation').getByRole('link', { name: /Para Investidores/i }).first().click();
  await expect(page.getByText(/Modelos de Franquia MIGREI/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /Agendar Reunião/i })).toBeVisible();
});

test('para empresas exibe CTA de contrato', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('navigation').getByRole('link', { name: /Para Empresas/i }).click();
  const heroCta = page
    .locator('section')
    .filter({ hasText: /Diagnóstico em 48h/i })
    .getByRole('button', { name: /Consolidar Contrato/i });
  await expect(heroCta).toBeVisible();
});

test('para empresas envia formulário com sucesso (mock supabase)', async ({ page }) => {
  await page.route('**supabase.co/**', async (route) => {
    if (route.request().method() === 'POST') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: null, error: null }),
      });
    } else {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{}' });
    }
  });

  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('navigation').getByRole('link', { name: /Para Empresas/i }).click();

  const form = page.locator('#form-section');
  await form.getByLabel(/Nome completo/i).fill('Usuário Playwright');
  await form.getByLabel(/Email/i).fill('teste+pw@migrei.com');
  await form.getByLabel(/Telefone/i).fill('(11) 99999-0000');
  await form.getByLabel(/CNPJ/i).fill('12.345.678/0001-00');
  await form.getByLabel(/Empresa/i).fill('Playwright Ltda');

  await form.getByRole('button', { name: /Consolidar Contrato/i }).click();

  await expect(page.getByText(/Contrato Formalizado com Sucesso!/i)).toBeVisible();
});

test('calculadora abre e exibe simulador', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('navigation').getByRole('link', { name: /Calculadora/i }).click();
  await expect(page.getByText(/Simulador Oficial/i)).toBeVisible();
  await expect(page.getByText(/Quanto sua empresa pode/i)).toBeVisible();
});

test('landing de teste /lp responde e mostra CTAs', async ({ page }) => {
  await page.goto('/#/lp', { waitUntil: 'networkidle' });
  const hero = page.locator('section').filter({ hasText: /Landing de Teste/i });
  await expect(hero.getByText(/Landing de Teste/i)).toBeVisible();
  await expect(hero.getByText(/migreimle.com.br/i, { exact: true })).toBeVisible();
  await expect(hero.getByRole('button', { name: /Ver solução empresarial/i })).toBeVisible();
  await expect(hero.getByRole('button', { name: /Ver modelo de franquia/i })).toBeVisible();
});
