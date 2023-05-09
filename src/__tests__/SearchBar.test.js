import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar/SearchBar';

test('Se a search bar esta sendo renderizada', () => {
    render(<SearchBar />);
    const searchElement = screen.getByRole('textbox');
    expect(searchElement).toBeInTheDocument();
});