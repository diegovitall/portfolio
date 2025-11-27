import { render } from '@testing-library/react';
import { Button } from '../components/ui/button';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });
});