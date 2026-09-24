import { SignJWT, jwtVerify } from 'jose';

const getSecret = () =>
  new TextEncoder().encode(
    process.env.JWT_SECRET ?? 'beatriz-silva-storymaker-fallback-secret'
  );

export async function signToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret());
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}