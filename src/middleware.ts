import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/auth";



export async function middleware(req: NextRequest){
    const session = await auth();

    if(!session){
        return NextResponse.redirect(new URL('/signup',req.url))

    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*','/configure/:path*'], // Protect all routes under `/admin/`
};
