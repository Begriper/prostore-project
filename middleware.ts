import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

/**
 * Export auth from Next-Auth as middleware
 * This enables authentication and session cart ID creation on all matched routes
 */
export const { auth: middleware } = NextAuth(authConfig);

/**
 * Middleware configuration
 * Defines which routes should have the middleware applied
 */
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
