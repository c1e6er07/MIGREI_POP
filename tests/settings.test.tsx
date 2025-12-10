import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Settings from '../pages/dashboard/Settings';

vi.mock('../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { id: 'user-1', email: 'user@test.com' },
    profile: { full_name: 'Usuário Teste', role: 'Admin' },
  }),
}));

vi.mock('../services/supabase', () => ({
  SaaSService: {
    seedTestDatabase: vi.fn().mockResolvedValue({ success: true, message: 'ok' }),
    clearTestDatabase: vi.fn().mockResolvedValue({ success: true, message: 'ok' }),
  },
}));

describe('Settings dashboard', () => {
  it('renderiza cabeçalho e abas principais', () => {
    render(<Settings />);

    expect(screen.getByText(/Configurações/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Perfil & Segurança/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Conexões \(Hub\)/i })).toBeInTheDocument();
  });
});
