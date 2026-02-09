import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip i18n middleware for API routes and static files
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/auth/') ||
        pathname.includes('.') // Static files
    ) {
        // For /auth/ routes, still refresh Supabase session
        if (pathname.startsWith('/auth/')) {
            return NextResponse.next();
        }
        return NextResponse.next();
    }

    return intlMiddleware(request);
}

export const config = {
    // Match all pathnames except for
    // - API routes
    // - Next.js internals
    // - Static files
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
