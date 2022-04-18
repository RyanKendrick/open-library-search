import { render, screen } from '@testing-library/react';
import Results from '../Results'
import mockData from 'axios'

describe('Results', () => {
    test('Results renders data', async () => {
        render(<Results data={mockData}/>);
        const resultElements = await screen.findAllByTestId('results-item')
        expect(resultElements).toHaveLength(10)
    });
})