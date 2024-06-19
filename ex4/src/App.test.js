import { render, screen } from '@testing-library/react';
import App from './App';

test('check if hello world exists', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
