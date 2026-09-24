import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const getSecret = () =>
  new TextEncoder().encode(
    process.env.JWT_SECRET ?? 'beatriz-silva-storymaker-fallback-secret'
  );

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/admin/login') return NextResponse.next();

  const token = req.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    await jwtVerify(token, getSecret());
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};