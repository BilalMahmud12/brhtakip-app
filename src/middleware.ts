import { NextRequest, NextResponse } from "next/server";
import { fetchAuthSession } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "./utils/amplify-utils";
import { AmplifyServer } from "aws-amplify/adapter-core";

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    let authenticated = false

    try {
        authenticated = await runWithAmplifyServerContext({
            nextServerContext: { request, response: NextResponse.next()},
            operation: async (contextSpec: AmplifyServer.ContextSpec) => {
                const session = await fetchAuthSession(contextSpec, {});
                return session.tokens !== undefined;
            } 
        })
    } 
    catch (error) {
        console.error(error)
        authenticated = false
    }

    if (authenticated) {
        // If the user is trying to access login or home page while authenticated
        if (url.pathname === '/login' || url.pathname === '/') {
            url.pathname = '/dashboard'; // Redirect to dashboard
            return NextResponse.redirect(url);
        }
    } else {
        // If not authenticated, redirect to login, except when already on the login page
        if (!url.pathname.startsWith('/login')) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - login
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};