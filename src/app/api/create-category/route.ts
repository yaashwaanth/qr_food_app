import { auth } from "@/app/auth";
import { db } from "@/db";
import { NextResponse } from "next/server";



export async function POST(req:Request) {
     try {

        const session = await auth();
        if(!session){
            return NextResponse.json({
                success: false,
                error: "Not authenticated"
            },{
                status: 401
            })
        }


    
      
        try {

            const {storeIdStr , categoryName} = await req.json();

            const store = await db.store.findUnique({
                where: {id: storeIdStr}
            })
            
    
           if (!storeIdStr || !categoryName) {
                return NextResponse.json(
                { success: false, error: "Missing storeId or categoryName" },
                { status: 400 }
                );
            }
    
            
              if(categoryName && storeIdStr){
                
                const newCategory = await db.category.create({
                    data:{
                        name: categoryName,
                        storeId:storeIdStr
                    }
                })
    
    
                return NextResponse.json(
                    { success: true, category: newCategory },
                    { status: 201 } // Use 201 for successful creation
                  );
    
              }
        } catch (error) {
            console.log(error);
            
            return NextResponse.json(
                { success: false,error: error },
                { status: 201 } // Use 201 for successful creation
              );
        }
       
    
        
     } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 404 });
    
     }
    }


       
    
