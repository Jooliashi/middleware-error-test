import { NextResponse } from 'next/server'
 
export function middleware() {
  console.log('Inside middleware')
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}
 
