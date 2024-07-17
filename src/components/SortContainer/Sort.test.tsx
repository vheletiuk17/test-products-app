import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Sort } from './Sort';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Sort component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Sort />
            </Provider>
        );
    });

    it('renders input fields and button correctly', () => {
        const inputSearch = screen.getByPlaceholderText('Search by product name...');
        const inputCategory = screen.getByPlaceholderText('Filter by category...');
        const sortButton = screen.getByRole('button', { name: /Price/ });

        expect(inputSearch).toBeInTheDocument();
        expect(inputCategory).toBeInTheDocument();
        expect(sortButton).toBeInTheDocument();
    });

    it('handles search input change', () => {
        const inputSearch = screen.getByPlaceholderText('Search by product name...');
        fireEvent.change(inputSearch, { target: { value: 'test' } });

        expect(inputSearch).toHaveValue('test');

    });

    it('handles category input change', () => {
        const inputCategory = screen.getByPlaceholderText('Filter by category...');
        fireEvent.change(inputCategory, { target: { value: 'electronics' } });

        expect(inputCategory).toHaveValue('electronics');

    });

    it('filters products by category', () => {
        const inputCategory = screen.getByPlaceholderText('Filter by category...');
        fireEvent.change(inputCategory, { target: { value: 'electronics' } });


        const filteredProducts = screen.getAllByTestId('product-item');
        expect(filteredProducts.length).toBeGreaterThan(0);
    });

    it('sorts products by price', () => {
        const sortButton = screen.getByRole('button', { name: /Price/ });
        fireEvent.click(sortButton);


        const sortedProducts = screen.getAllByTestId('product-item');
        expect(sortedProducts).toHaveLength(3);

    });
});
