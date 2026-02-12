import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import App from './App.vue';

describe('App', () => {
  it('renders key sections and navigation', () => {
    render(App);

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /codesculptor/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /portfolio built around product impact/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /let's shape your next digital release/i })).toBeInTheDocument();
  });

  it('renders footer and contact actions', () => {
    render(App);

    expect(screen.getByRole('button', { name: /send brief/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to top/i })).toHaveAttribute('href', '#home');
  });
});
