import { render, screen } from '@testing-library/react';
import App from './App';


describe("Should render correctly", () => {
  it("Should have a search input with placeholder", () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Search by team name');
    expect(input).toBeInTheDocument();
  })
})