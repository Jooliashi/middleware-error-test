import { NextResponse } from 'next/server';

export default async function middleware(req) {
  const { pathname } = req.nextUrl
 
  console.log(pathname)
  return NextResponse.next();
}