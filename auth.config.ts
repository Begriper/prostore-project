import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";


export const authConfig = {
  // Define pages configuration
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },

  providers: [],

  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authorized({ request, auth }: { request: any; auth: any }) {
      // Array of protected paths that require authentication
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/profile/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];

      // Get pathname from the request URL
      const { pathname } = request.nextUrl;

      // Check if user is not authenticated and accessing a protected path
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

      // Check if session cart cookie already exists
      if (!request.cookies.get("sessionCartId")) {
        const sessionCartId = crypto.randomUUID();

        // Create new response with the original request headers
        const response = NextResponse.next({
          request: {
            headers: new Headers(request.headers),
          },
        });

        // Set the session cart ID cookie in the response
        response.cookies.set("sessionCartId", sessionCartId);

        return response;
      }

      // If session cart cookie exists, allow the request to proceed
      return true;
    },
  },
} satisfies NextAuthConfig;
