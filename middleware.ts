import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define which routes to protect
const protectedRoutes = ["/dashboard"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
