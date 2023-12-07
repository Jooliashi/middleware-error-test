import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const { pathname } = req.nextUrl
 
  console.log(pathname)
  return new NextResponse(
    'you are in middleware',
  );
}