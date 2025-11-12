import React from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}
