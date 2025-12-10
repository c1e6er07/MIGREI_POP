import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Compliance from '../pages/dashboard/Compliance';

describe('Compliance dashboard', () => {
  it('shows compliance title and statuses', () => {
    render(<Compliance />);

    expect(screen.getByText(/Compliance & Riscos/i)).toBeInTheDocument();
    expect(screen.getByText(/ANEEL/i)).toBeInTheDocument();
    expect(screen.getByText(/CCEE/i)).toBeInTheDocument();
  });
});
