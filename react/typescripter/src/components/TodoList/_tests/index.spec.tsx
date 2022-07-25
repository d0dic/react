import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test-utils';

import TodoList from '../index';

test('renders', () => {
  renderWithProviders(<TodoList />);

  const element = screen.getByRole('button', { name: /add todo/i });
  expect(element).toBeInTheDocument();
});
