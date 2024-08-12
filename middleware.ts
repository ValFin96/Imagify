import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {
  console.log("Request URL:", request.url);  // Add this line for debugging
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|favicon.ico).*)',
    '/api/(.*)',
    '/sign-in',  // Explicitly add sign-in and sign-up routes if needed
    '/sign-up',
  ],
};