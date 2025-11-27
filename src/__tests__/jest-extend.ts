// Jest matcher extension for axe-core
import { AxeResults } from 'axe-core';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(): R;
    }
  }
}
export {};
