# Link Shortener Project - Agent Instructions

This project uses comprehensive agent instructions documented in the `/docs` directory to ensure consistent coding standards and best practices.

## Quick Start for Agents

All LLM agents working on this project **MUST** adhere to the coding standards outlined in `/docs`. It is incredibly important — and non-negotiable — that agents **ALWAYS** read the relevant individual instruction file(s) within the `/docs` directory **BEFORE** generating *any* code, edits, or PRs. Failure to do so may result in non-compliant or unsafe contributions.

**IMPORTANT: Read `/docs` FIRST ✅**  
Before writing or generating any code, open and read the specific documentation file(s) in `/docs` that apply to your task (for example, `docs/02-typescript-standards.md`, `docs/04-nextjs-patterns.md`). Do not proceed until you understand and plan to follow the documented standards.

These instructions cover:

- **Project Architecture** - Technology stack and structure
- **TypeScript Patterns** - Type safety and typing conventions
- **React Components** - Functional components and hooks
- **Next.js App Router** - Server/client components and API routes
- **Database Operations** - Drizzle ORM and schema design
- **Code Style** - Formatting, naming, and organization
- **Testing** - Unit, component, and integration tests
- **Authentication** - Clerk integration and route protection



## Key Principles

**‼️ MUST READ:** Always consult the relevant file(s) within `/docs` **BEFORE** generating any code or changes — this is required for compliance and consistency.

### Code Quality
✅ **DO:**
- Use explicit TypeScript types (never `any`)
- Create functional components with hooks
- Write server components by default, client components when needed
- Keep functions small and focused
- Document complex logic with JSDoc comments
- Write comprehensive tests

❌ **DON'T:**
- Use `any` type or implicit `unknown`
- Create class components
- Mix server and client logic without clear boundaries
- Write functions longer than 50 lines
- Skip error handling
- Ignore test coverage

### File Organization
```
/app              - Next.js pages and layouts
/components       - Reusable React components
/db               - Database schema and queries
/lib              - Utilities and helpers
/docs             - Agent instructions (this directory)
/public           - Static assets
```

### Technology Stack
- **Next.js 16** - React framework with App Router
- **React 19** - UI components
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first styling
- **Drizzle ORM** - Database abstraction
- **Neon DB** - PostgreSQL serverless database
- **Clerk** - Authentication
- **Lucide React** - Icon library

## Common Workflows

### Adding a New Feature
1. Design the feature considering server/client boundaries
2. Define database schema if needed (see `docs/05-database-standards.md`)
3. Create API routes or server actions (see `docs/04-nextjs-patterns.md`)
4. Build UI components following React standards (see `docs/03-react-component-standards.md`)
5. Write tests (see `docs/07-testing-standards.md`)
6. Ensure TypeScript compliance (see `docs/02-typescript-standards.md`)
7. Follow code style (see `docs/06-code-style-guide.md`)

### Fixing a Bug
1. Identify the root cause
2. Write a test case that reproduces the bug
3. Fix the issue
4. Verify the test passes
5. Check for related issues in similar code
6. Update documentation if needed

### Code Review Checklist
- [ ] TypeScript types are explicit and correct
- [ ] No `any` types used without justification
- [ ] Components are functional (no class components)
- [ ] Database queries are in `/db` directory
- [ ] Tests are included and passing
- [ ] Code style matches guidelines
- [ ] Comments explain "why", not "what"
- [ ] Error handling is comprehensive
- [ ] Accessibility is considered

## Useful Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Run production server

# Linting
npm run lint             # Run ESLint

# Database
npx drizzle-kit push    # Push schema changes
npx drizzle-kit pull    # Pull schema from database
npx drizzle-kit generate # Generate migrations

# Testing (once configured)
npm test                 # Run all tests
npm test -- --watch     # Watch mode
npm test -- --coverage  # Coverage report
```

## Questions?

Refer to the appropriate documentation file:
- **Project structure?** → `docs/01-project-overview.md`
- **TypeScript help?** → `docs/02-typescript-standards.md`
- **Building components?** → `docs/03-react-component-standards.md`
- **UI components?** → `docs/03-ui-component-standards.md`
- **Next.js patterns?** → `docs/04-nextjs-patterns.md`
- **Database operations?** → `docs/05-database-standards.md`
- **Code style?** → `docs/06-code-style-guide.md`
- **Writing tests?** → `docs/07-testing-standards.md`
- **Authentication & auth flows?** → `docs/08-authentication-standards.md`
- **Navigation?** → `docs/00-README.md`

---

## Compliance

All code must:
1. ✅ Pass TypeScript strict mode compilation
2. ✅ Pass ESLint validation
3. ✅ Follow the coding standards in `/docs`
4. ✅ Include appropriate tests
5. ✅ Have no `any` types without documented justification

Non-compliant code will not be merged.

---

**Last Updated:** January 9, 2026
