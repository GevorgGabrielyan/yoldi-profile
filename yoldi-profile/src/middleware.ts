import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/accounts"];
const publicRoutes = ["/login", "/signup", "/"];

const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  console.log(cookies());
  console.log("cookies()cookies()");
  const token = cookies().get("token")?.value;

  if (isProtectedRoute && token) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (
    isPublicRoute &&
    token &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export default middleware;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
