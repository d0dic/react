import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import { renderWithRouter as render } from '../../utils/test-utils';

import Main from '../Main';

describe('Main', () => {
  it('renders home page', async () => {
    render(<Main />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      const element = screen.getByText(/learn react/i);
      expect(element).toBeInTheDocument();
    });
  });

  it('renders todos page', async () => {
    render(<Main />, { route: 'todos' });

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      const element = screen.getByRole('button', { name: /add todo/i });
      expect(element).toBeInTheDocument();
    });
  });

  it('renders about page', async () => {
    render(<Main />, { route: 'about' });

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      const element = screen.getByRole('heading', { level: 1, name: /about/i });
      expect(element).toBeInTheDocument();
    });
  });
});
