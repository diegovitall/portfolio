import { render } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter
} from '../components/ui/card';

describe('Card components', () => {
  it('renders Card with children and className', () => {
    const { container } = render(
      <Card data-testid="card" className="custom-class">
        <p>Content</p>
      </Card>,
    );
    const cardDiv = container.querySelector('[data-slot="card"]');
    expect(cardDiv).toBeInTheDocument();
    expect(cardDiv).toHaveClass('bg-card', 'text-card-foreground', 'flex', 'rounded-xl', 'border');
    expect(cardDiv).toHaveClass('custom-class');
  });

  it('renders CardHeader with children and className', () => {
    const { container } = render(
      <CardHeader data-testid="header" className="header-class">
        Header
      </CardHeader>,
    );
    const headerDiv = container.querySelector('[data-slot="card-header"]');
    expect(headerDiv).toBeInTheDocument();
    expect(headerDiv).toHaveClass('grid', 'gap-1.5', 'px-6', 'pt-6');
    expect(headerDiv).toHaveClass('header-class');
  });

  it('renders CardTitle correctly', () => {
    const { container } = render(
      <CardTitle data-testid="title" className="title-class">
        Title
      </CardTitle>,
    );
    const title = container.querySelector('[data-slot="card-title"]');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('leading-none', 'title-class');
  });

  it('renders CardDescription correctly', () => {
    const { container } = render(
      <CardDescription data-testid="desc" className="desc-class">
        Description
      </CardDescription>,
    );
    const desc = container.querySelector('[data-slot="card-description"]');
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveClass('text-muted-foreground', 'desc-class');
  });

  it('renders CardAction correctly', () => {
    const { container } = render(
      <CardAction data-testid="action" className="action-class">
        Action
      </CardAction>,
    );
    const action = container.querySelector('[data-slot="card-action"]');
    expect(action).toBeInTheDocument();
    expect(action).toHaveClass('col-start-2', 'row-span-2', 'self-start', 'justify-self-end', 'action-class');
  });

  it('renders CardContent correctly', () => {
    const { container } = render(
      <CardContent data-testid="content" className="content-class">
        Content
      </CardContent>,
    );
    const content = container.querySelector('[data-slot="card-content"]');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('px-6', 'content-class');
  });

  it('renders CardFooter correctly', () => {
    const { container } = render(
      <CardFooter data-testid="footer" className="footer-class">
        Footer
      </CardFooter>,
    );
    const footer = container.querySelector('[data-slot="card-footer"]');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('flex', 'items-center', 'px-6', 'pb-6', 'footer-class');
  });
});