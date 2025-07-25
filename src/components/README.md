# Components Directory

## Structure

- `shared/` – Common UI components used across the app (e.g., Navbar, Footer, MDX renderer).
- `features/` – Feature-specific components (add new folders/files here for each major feature).
- `__tests__/` – Unit and integration tests for components.

## Best Practices

- Use TypeScript for all components and props.
- Add JSDoc comments to non-trivial functions/components.
- Place shared utilities in `src/utils`.
- Write tests for all new components in `__tests__`.
- Prefer functional components and React hooks.
- Use Tailwind CSS utility classes for styling.

## Example

To add a new feature component:

1. Create a folder in `features/` (e.g., `features/robotCard/`).
2. Add your component file(s) there.
3. Add tests in `__tests__`.
4. Document any complex logic with comments or JSDoc.
