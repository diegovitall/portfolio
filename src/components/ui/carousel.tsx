import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { cn } from './utils';

export interface CarouselProps {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  // plugins not used
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: UseEmblaCarouselType[1]) => void;
  className?: string;
}

export const Carousel: React.FC<React.PropsWithChildren<CarouselProps>> = ({
  children,
  opts,
  orientation = 'horizontal',
  setApi,
  className,
}) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === 'horizontal' ? 'x' : 'y',
  });

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  return (
    <div
      ref={carouselRef}
      className={cn('overflow-hidden', className)}
      role="region"
    >
      {children}
    </div>
  );
};

export const CarouselContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => <div className="flex">{children}</div>;

export const CarouselItem: React.FC<React.PropsWithChildren> = ({
  children,
}) => <div className="min-w-full flex-shrink-0">{children}</div>;
