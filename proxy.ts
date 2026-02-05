import { NextRequest, NextResponse } from "next/server";
import { userService } from "./src/services/user.service";
import { Roles } from './src/constants/roles';



export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let isAdmin = false;
  let isTutor = false;
  let isStudent = false;

  const { data } = await userService.getSession();

  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === Roles.admin;
    isTutor= data.user.role===Roles.tutor;
    isStudent= data.user.role===Roles.student;
  }

  //* User in not authenticated at all
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //* User is authenticated and role = ADMIN
  //* User can not visit user dashboard
  if (isAdmin && !pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  //* User is authenticated and role = USER
  //* User can not visit admin-dashboard
  if (!isAdmin && !isTutor && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!isAdmin && !isStudent && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/tutor-dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/tutor-dashboard",
    "/tutor-dashboard/:path*",
  ],
};