import { NextResponse } from 'next/server'
 
export async function middleware() {
  console.log('Inside middleware')
  await new Promise(function (resolve) {
    setTimeout(resolve, 250);
  });
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}
 
