import { NextResponse } from 'next/server';

export default async function middleware(req) {
  return NextResponse.json({ message: 'Too many requests' }, { status: 429 })
}

export const config = {
  matcher: '/pages/api/hello.js',
}