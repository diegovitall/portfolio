import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

describe('Accessibility tests', () => {
  it('Carousel should have no accessibility violations', async () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Button should have no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Card should have no accessibility violations', async () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>,
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
