declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
    toHaveTextContent(expected?: string | RegExp): R;
    toHaveClass(...classes: string[]): R;
  }
}
