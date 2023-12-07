import { NextResponse } from 'next/server'
 
export async function middleware() {
  console.log('Inside middleware')
  await new Promise(function (resolve) {
    setTimeout(resolve, 250);
  });
  return NextResponse.next();
}

export const config = {
    // Run this middleware only in /api requests.
    matcher: '/api/:path*',
  }
  
 
