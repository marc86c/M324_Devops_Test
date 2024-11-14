import { render, screen } from '@testing-library/react';
import Header from './Header.js';

test('renders Neue Liste erstellen link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Neue Liste erstellen/i);
  expect(linkElement).toBeInTheDocument();
});
