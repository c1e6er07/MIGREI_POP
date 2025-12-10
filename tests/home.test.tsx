import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home page', () => {
  it('renders hero headline and CTA buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Economize em Energia/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ver Nossa Solução/i })).toBeInTheDocument();
  });
});
