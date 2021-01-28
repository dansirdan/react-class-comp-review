import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, world!', () => {
  render(<App />);
  const landingPageText = screen.getByText(/Hello, world!/i);
  expect(landingPageText).toBeInTheDocument();
});
