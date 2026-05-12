// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainlitUI title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainlitUI/i);
    expect(titleElement).toBeInTheDocument();
});
