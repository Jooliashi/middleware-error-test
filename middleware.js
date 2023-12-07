export default async function middleware(req) {
  const { pathname } = req.nextUrl
 
  console.log(pathname)
}
 
