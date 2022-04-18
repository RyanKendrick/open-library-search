import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search'

describe('Search', () => {
  test('renders search input element', () => {
    render(<Search />);
    const searchinput = screen.getByRole('textbox')
    expect(searchinput).toBeInTheDocument();
  });

  test('renders search button', () => {
    render(<Search />);
    const searchBtn = screen.getByRole('button')
    expect(searchBtn).toBeInTheDocument();
  });
 
  test('renders new search input', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText('Search by Title')
    fireEvent.change(searchInput, { target: { value: 'javascript'}})
    expect(searchInput.value).toBe('javascript');
  })
})