import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Maintenance mode. Set MAINTENANCE_MODE=true in the environment (e.g. in
 * .env.local or the hosting dashboard) and restart/redeploy to cover the whole
 * site with /maintenance. Unset or any other value turns the site back on.
 */
export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname === "/maintenance") return NextResponse.next();

  // 503 + Retry-After tells search engines this is temporary.
  return NextResponse.rewrite(new URL("/maintenance", request.url), {
    status: 503,
    headers: { "Retry-After": "3600" },
  });
}

export const config = {
  // Skip Next internals and static files in /public (images, favicon, etc).
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
