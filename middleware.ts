import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from './services/AuthServices';

const authRoutes = ['/login', 'register'];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await currentUser();

  const roleBasedRoutes = {
    user: [/^\/user/],
    admin: [/^\/admin/],
  };
  type Role = keyof typeof roleBasedRoutes;

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (userInfo?.role && roleBasedRoutes[userInfo?.role as Role]) {
    const routes = roleBasedRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: ['/my-profile', '/admin', '/admin/:page', '/user', '/user:page'],
};
