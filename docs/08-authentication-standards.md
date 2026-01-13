# Authentication Standards

This project uses **Clerk** for all authentication and authorization. NO OTHER AUTH METHODS should be implemented.

## Overview

- **Provider:** Clerk
- **Scope:** All authentication and user management
- **Modals:** Sign in/sign up always launch as modals
- **Protected Routes:** `/dashboard` requires authentication

## Key Principles

### Authentication Provider
✅ **DO:**
- Use Clerk for all auth operations
- Use Clerk's provided React hooks and components
- Implement protected routes with Clerk middleware
- Use Clerk's user objects for user data

❌ **DON'T:**
- Implement custom authentication methods
- Store auth tokens in localStorage manually
- Use third-party auth libraries alongside Clerk
- Bypass Clerk's security mechanisms

## Route Protection

### Dashboard Page
The `/dashboard` route is **protected** and requires authentication.

```typescript
// Use Clerk's auth checks to protect routes
import { auth } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    // Redirect to home - Clerk middleware handles this
    redirect('/');
  }
  
  return <Dashboard />;
}
```

### Homepage Redirect
Users who are logged in attempting to access the homepage (`/`) should be redirected to `/dashboard`.

```typescript
// In homepage component or layout
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/dashboard');
    }
  }, [isLoaded, userId, router]);

  // Show landing page if not authenticated
  if (isLoaded && !userId) {
    return <LandingPage />;
  }
}
```

## Sign In / Sign Up Modals

All Clerk sign-in and sign-up flows **must launch as modals**, not full-page redirects.

```typescript
import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function AuthButtons() {
  return (
    <>
      <SignInButton mode="modal" />
      <SignUpButton mode="modal" />
    </>
  );
}
```

## Hooks

Use these Clerk hooks for auth state:

- `useAuth()` - Get current user and auth state (client components)
- `useUser()` - Get detailed user information (client components)
- `auth()` - Server-side auth check (server components/actions)
- `currentUser()` - Get full user object (server components/actions)

## Environment Variables

Required `.env.local` variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```

## Middleware

Clerk middleware is configured in `middleware.ts` to:
- Protect the `/dashboard` route
- Redirect authenticated users from `/` to `/dashboard`
- Allow public access to sign-in/sign-up modals

```typescript
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

## User Data

Access user information via Clerk:

```typescript
import { currentUser } from '@clerk/nextjs/server';

export default async function Component() {
  const user = await currentUser();
  
  return <p>Welcome, {user?.firstName}</p>;
}
```

## Important Notes

- Never implement custom login/logout logic
- Always use Clerk's pre-built UI components
- Store user-specific data using Clerk's user ID as the reference
- Keep auth tokens secure - Clerk handles this automatically
- Use middleware to enforce route protection

---

**Last Updated:** January 9, 2026
