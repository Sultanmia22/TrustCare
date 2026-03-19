import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

const privateRoutes = ['/service','/mybooking','/booking']

export async function proxy(req) {

    const token = await getToken({req,secret: process.env.NEXTAUTH_SECRET})

    console.log(token)

    const reqPath = req.nextUrl.pathname;

    const isAuthenTicate = Boolean(token)

    const isPrivate = privateRoutes.some(route => reqPath.startsWith(route))

    if(!isAuthenTicate && isPrivate){
        const loginUrl = new URL('/login', req.url)
        loginUrl.searchParams.set('callbackUrl',reqPath);
        
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}
 
export const config = {
  matcher: ['/service/:path*','/mybooking/:path*','/booking/:path*']
}