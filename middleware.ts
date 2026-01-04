import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/wishlist", "/friends"]; //  protected pages

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    // Read token from cookies
    const token = req.cookies.get("dummy_token"); // dummy token for now

    if (!token) {
      // redirect to login if no token
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// Configure which paths to match
export const config = {
  matcher: ["/wishlist/:path*", "/friends/:path*"],
};
