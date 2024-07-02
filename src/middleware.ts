import { NextResponse } from "next/server"
import type { NextRequest  } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('middleware pathname', request.nextUrl.pathname, request.url)
    if (
        request.nextUrl.pathname === '/'
        ||
        request.nextUrl.pathname.startsWith('/common/errors')
        ||
        request.nextUrl.pathname.startsWith('/dashboard')
    ) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/common/errors/404', request.url))
  }
   
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: [
        /**
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },

        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            has: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            has: [{ type: 'header', key: 'x-present' }],
            missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
        },
    ],
  }