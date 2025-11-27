declare module 'jest-axe' {
  import { AxeResults } from 'axe-core';
  export function axe(
    node: HTMLElement | Document,
    options?: any
  ): Promise<AxeResults>;
  export const toHaveNoViolations: jest.CustomMatcher;
}
