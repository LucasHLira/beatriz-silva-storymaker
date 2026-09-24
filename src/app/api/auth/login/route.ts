import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }

  const token = await signToken({ sub: 'beatriz-admin' });

  const res = NextResponse.json({ ok: true });
  res.cookies.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return res;
}