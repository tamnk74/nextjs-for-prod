import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
  '/profile(.*)',
  '/calendar(.*)',
  // Add more protected routes as needed
]);

// Protected API routes that require authentication
const isProtectedApiRoute = createRouteMatcher([
  '/api/protected(.*)',
  '/api/user(.*)',
  // Add more protected API routes as needed
]);

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // Handle API routes without internationalization
  if (pathname.startsWith('/api')) {
    // Apply Clerk authentication to protected API routes
    if (isProtectedApiRoute(req)) {
      await auth.protect();
    }
    return; // Skip internationalization for all API routes
  }

  // Handle internationalization for non-API routes
  const intlResponse = intlMiddleware(req);

  // Apply Clerk authentication to protected routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return intlResponse;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
