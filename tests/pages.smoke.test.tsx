import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ParaEmpresas from '../pages/ParaEmpresas';
import Franquia from '../pages/Franquia';
import Sobre from '../pages/Sobre';

describe('Smoke tests - páginas principais', () => {
  const renderWithRouter = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

  it('renderiza Para Empresas com processo e formulário', () => {
    renderWithRouter(<ParaEmpresas />);

    expect(
      screen.getByText(/Migre para o Mercado Livre com segurança e ROI imediato/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Consolide Seu Contrato Agora/i)).toBeInTheDocument();
  });

  it('renderiza Franquia com hero e CTA', () => {
    renderWithRouter(<Franquia />);

    expect(screen.getByText(/Modelos de Franquia MIGREI/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Agendar Reunião/i })).toBeInTheDocument();
  });

  test('renderiza Sobre com novo conteúdo de franquia', () => {
    renderWithRouter(<Sobre />);

    expect(screen.getByText(/POR QUE INVESTIR/i)).toBeInTheDocument();
    expect(screen.getByText(/em Franquias MIGREI/i)).toBeInTheDocument();
    expect(screen.getByText(/Mercado em Expansão Acelerada/i)).toBeInTheDocument();
  });
});
