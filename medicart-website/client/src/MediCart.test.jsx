import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MediCart from './MediCart.jsx';

describe('MediCart demo storefront', () => {
  it('shows the storefront and featured products', () => {
    render(<MediCart />);
    expect(screen.getByRole('heading', { name: /wellness starts/i })).toBeInTheDocument();
    expect(screen.getByText('Paracetamol 500mg')).toBeInTheDocument();
  });

  it('adds a product and updates the cart count', () => {
    render(<MediCart />);
    fireEvent.click(screen.getAllByRole('button', { name: /add paracetamol 500mg to cart/i })[0]);
    expect(screen.getByRole('button', { name: /open cart, 1 items/i })).toBeInTheDocument();
  });
});
