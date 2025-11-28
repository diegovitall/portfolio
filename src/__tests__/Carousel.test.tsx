import { render } from '@testing-library/react';
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel';

describe('Carousel component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    expect(getByText('Slide 1')).toBeInTheDocument();
    expect(getByText('Slide 2')).toBeInTheDocument();
  });

  it('applies custom className correctly', () => {
    const { container } = render(
      <Carousel className="custom-class">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const carouselWrapper = container.firstChild as HTMLElement;
    expect(carouselWrapper).toHaveClass('overflow-hidden');
    expect(carouselWrapper).toHaveClass('custom-class');
  });
});