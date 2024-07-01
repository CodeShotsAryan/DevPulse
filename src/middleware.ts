export {default } from 'next-auth/middleware'

import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export  function middleware(req:NextRequest){
    console.log("middleware working");
    
    // const token = await getToken({req,secret:process.env.NEXTAUTH_SECRET})
    // const isAuthPage = req.nextUrl.pathname.startsWith('/enter')

    // if(isAuthPage){
    //     if(token){
    //         return NextResponse.redirect(new URL('/',req.url))

    //     }
    //     return null
    // }
    // if(!token)
    //     {
    //         return NextResponse.redirect(new URL('/enter',req.url))
    //     }
    //     return null
}

export const config ={
    matcher :["/About/:path*","/api/:path*"]
}