import { render, screen } from '@testing-library/react';
import Banner from '@/components/Banner';
import '@testing-library/jest-dom';

describe('Banner Test', () => {
  it('Renders the title correctly', () => {
    render(<Banner title="Welcome to E-TECH" />);
 
    const heading = screen.getByRole('heading', { name: /Welcome to E-TECH/i });
 
    expect(heading).toBeInTheDocument();
  });
});
