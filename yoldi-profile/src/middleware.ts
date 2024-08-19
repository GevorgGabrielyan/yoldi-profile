import { NextRequest, NextResponse } from "next/server";
import { getApiKey } from "@/app/actions/auth";

const publicRoutes = ["/auth/login", "/auth/signup", "/"];

const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(path);

  const apiKey = await getApiKey();

  if (isPublicRoute && apiKey) {
    return NextResponse.redirect(new URL("/accounts", req.nextUrl));
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
