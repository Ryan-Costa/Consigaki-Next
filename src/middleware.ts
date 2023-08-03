import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('consigaki_token')?.value

  const signInURL = new URL('/signin', request.url)
  const dashboardURL = new URL('/dashboard', request.url)

  if (!token) {
    if (request.nextUrl.pathname === '/signin') {
      return NextResponse.next()
    }
    return NextResponse.redirect(signInURL)
  }

  if (request.nextUrl.pathname === '/signin') {
    return NextResponse.redirect(dashboardURL)
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(signInURL)
  }
}

export const config = {
  matcher: [
    '/',
    '/signin',
    '/agreements/:path*',
    '/dashboard/:path*',
    '/loans/:path*',
    '/products/:path*',
    '/providers/:path*',
    '/profile/:path*',
    '/reports/:path*',
    '/users/:path*',
  ],
}
