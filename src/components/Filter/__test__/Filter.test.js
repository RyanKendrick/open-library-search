import { render, screen } from '@testing-library/react';
import Filter from '../Filter'

describe('Filter', () => {
    test('renders select filter', () => {
        render(<Filter />);
        const selectFilter = screen.getByRole('combobox')
        expect(selectFilter).toBeInTheDocument();
    });
    
    test('renders select default option', () => {
        render(<Filter />);
        const defaultOption = screen.getByRole('option', { name: 'Filter'})
        expect(defaultOption.selected).toBe(true)
    });
})