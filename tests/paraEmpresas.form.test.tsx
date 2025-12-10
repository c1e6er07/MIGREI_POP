import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ParaEmpresas from '../pages/ParaEmpresas';

const createMock = vi.fn();

vi.mock('../services/supabase', () => ({
  LeadService: {
    create: (...args: unknown[]) => createMock(...args),
  },
}));

describe('ParaEmpresas - formulário e CTAs', () => {
  beforeEach(() => {
    createMock.mockReset();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderPage = () => render(<MemoryRouter><ParaEmpresas /></MemoryRouter>);

  it('envia formulário com sucesso e mostra confirmação', async () => {
    createMock.mockResolvedValueOnce({ success: true });

    renderPage();

    fireEvent.change(screen.getByLabelText(/Nome completo/i), {
      target: { value: 'Usuário Teste' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'teste@migrei.com' },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: '(11) 99999-9999' },
    });
    fireEvent.change(screen.getByLabelText(/Empresa/i), {
      target: { value: 'Empresa X' },
    });
    fireEvent.change(screen.getByLabelText(/CNPJ/i), {
      target: { value: '12.345.678/0001-00' },
    });

    const [heroCta, submitButton] = screen.getAllByRole('button', {
      name: /Consolidar Contrato/i,
    });
    void heroCta;
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Contrato Formalizado com Sucesso!/i)).toBeInTheDocument();
    });

    expect(createMock).toHaveBeenCalledTimes(1);
  });

  it('mostra CTA final para iniciar agora', () => {
    renderPage();

    expect(screen.getByRole('button', { name: /Comece Agora/i })).toBeInTheDocument();
  });
});
