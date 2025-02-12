import { auth } from "@/app/auth";
import { db } from "@/db";
import { NextResponse } from "next/server";



export async function GET() {
    const session = await auth();
    console.log(session);
    
    if(!session){
        return NextResponse.json({
            success: false,
            error: "Not authenticated"
        },{
            status: 401
        })
    }
     try {

        const user = await db.user.findUnique({
            where: {
                email: session.user?.email!
            }
        })
        
        console.log("user found ", user);
        
        if(!user){
            return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
        }
    
        const store = await db.store.findFirst({
                where: {userId : user.id}
            })

            console.log("store found ", store);
        
    
        return NextResponse.json({success: true, store},{status: 200})
        
     } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 404 });
    
     }
    }


       
    
