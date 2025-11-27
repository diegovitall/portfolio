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
});