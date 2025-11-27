# AGENTS

## Build / Lint / Test
- **Build**: `npm run build`
- **Dev**: `npm run dev`
- **Lint**: `npx eslint . --ext .ts,.tsx`
- **Test**: `vitest run` – all tests. Single file:
  ```bash
  vitest run path/to/__tests__/example.test.tsx
  ```

## Code Style Guidelines
- Imports: React → libs → local, use `@/` alias.
- Formatting: Prettier (`npm run format`).
- Types: explicit over any; components as `React.FC<Props>`.
- Naming: PascalCase for components, camelCase props, UPPER_SNAKE constants.
- Error handling: try/catch, `toast.error` or console.
- State: useState/useReducer, context for globals.
- Accessibility: semantic HTML, aria where needed.
- Tests: in `__tests__`, mirror structure, use @testing-library/react & Vitest.

## Cursor / Copilot Rules
None found.