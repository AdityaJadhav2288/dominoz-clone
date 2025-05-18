import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /HOME/i });
  expect(linkElement).toBeInTheDocument();
});
