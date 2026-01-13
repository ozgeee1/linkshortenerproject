## UI Component Standards

Purpose
- Provide concise rules for building UI in this project.

Core rule
- All UI elements must use shadcn UI components. Do NOT create custom UI components—compose and configure shadcn primitives instead.

Where to put components
- Place shared, project-provided components in `/components` only when they are trivial compositions of shadcn primitives and add no new styling tokens.

Do / Don't
- **Do:** Use shadcn components for buttons, forms, dialogs, tooltips, toasts, and layout primitives.
- **Do:** Prefer server components; mark as client only when using hooks or browser-only APIs.
- **Do:** Use explicit TypeScript types for props; keep components tiny (<50 LOC).
- **Do:** Follow accessibility: keyboard focus, aria labels, and semantic HTML.
- **Don't:** Implement custom visual primitives (buttons, inputs, modals). Do not ship a bespoke component library.

Props & typing
- Export strongly typed prop interfaces. Avoid `any`.

Styling
- Use Tailwind utility classes and shadcn variants. Do not introduce new global CSS for component visuals.

Testing
- Write component tests that assert rendered shadcn primitives and accessibility behaviors.

Examples
- Prefer composition like: use `Button`, `Input`, `Dialog` from shadcn and compose them in the page or tiny wrappers that only pass props (no new visuals).

Notes
- If an edge-case requires a custom primitive, open an RFC and document accessibility and theming implications in `/docs`.
