import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders movie names', () => {
  render(<App />);
  const movieCards = screen.getByText('The Dark Knight');
  expect(movieCards).toBeInTheDocument();
});
