
import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom'

// Mock the HomePage component
jest.mock('../app/HomePage/page', () => {
  return function MockHomePage() {
    return <div data-testid="mock-homepage">Mocked HomePage</div>;
  };
});

describe('Home component', () => {
  it('renders the HomePage component', () => {
    render(<Home />);
    const homePageElement = screen.getByTestId('mock-homepage');
    expect(homePageElement).toBeInTheDocument();
    expect(homePageElement).toHaveTextContent('Mocked HomePage');
  });
});