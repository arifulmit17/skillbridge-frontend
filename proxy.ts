
import { NextRequest, NextResponse } from "next/server";
import { userService } from '@/services/user.service';
import { Roles } from "@/constants/roles";


export async function proxy(request: NextRequest) {
  
  const pathname = request.nextUrl.pathname;
  console.log("hello proxy:",pathname);
  let isAuthenticated = false
    let isAdmin = false

  // // Skip middleware for verify-email route
  // if (pathname.startsWith("/verify-email")) {
  //   return NextResponse.next();
  // }

  // Check for session token in cookies
  const {data} = await userService.getSession()
  console.log(data);
  
  //* User is not authenticated at all
  // if (!data) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

    if (data) {
        isAuthenticated = true
        isAdmin = data.user.role === Roles.admin
    }
    //* User in not authenticated at all
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }


    if (isAdmin && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }
    if (isAdmin && pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }

    if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

  // Allow access if session exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin-dashboard/:path*","/tutor-dashboard/:path*"],
};
