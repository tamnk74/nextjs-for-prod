// import { NextRequest } from 'next/server';

// import { localizationMiddleware } from './features/internationalization/localization-middleware';

// // Matcher ignoring `/_next/` and `/api/` and svg files.
// export const config = { matcher: ['/((?!api|_next|.*.svg$).*)'] };

// export function middleware(request: NextRequest) {
//   return localizationMiddleware(request);
// }

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
