import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app correctly with link button', () => {
  render(<App />);
  const linkElement = screen.getByText(/shorten now/i);
  expect(linkElement).toBeInTheDocument();
});
