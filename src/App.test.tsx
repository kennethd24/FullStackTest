import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('Renders Full Stack Test', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Full Stack Test');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/completelyBadPath']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
