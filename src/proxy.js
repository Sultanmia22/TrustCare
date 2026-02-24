import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

const privateRoutes = ['/service','/myboking','/booking']

export async function proxy(req) {

    const token = await getToken({req})

    const reqPath = req.nextUrl.pathname;

    const isAuthenTicate = Boolean(token)

    const isPrivate = privateRoutes.some(route => reqPath.startsWith(route))

    if(!isAuthenTicate && isPrivate){
        const loginUrl = new URL('/login', req.url)
        
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}
 
export const config = {
  matcher: ['/service/:path*','/myboking/:path*','/booking/:path*']
}