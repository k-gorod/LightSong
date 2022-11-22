// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware (request: NextRequest) {
  console.log(request.nextUrl.pathname)

  // if(request.url !== 'http://localhost:3000/') {
  // console.log(request.headers.get('Authorization'))
  //   return NextResponse.redirect(new URL('/', request.url))

  // }
  // switch(request.url){
  //     case ""
  // }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|favicon.ico).*)'
  ]
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
