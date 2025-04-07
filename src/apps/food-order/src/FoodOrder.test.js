import { render, screen } from '@testing-library/react';
import FoodOrder from './FoodOrder';

test('renders learn react link', () => {
  render(<FoodOrder />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
