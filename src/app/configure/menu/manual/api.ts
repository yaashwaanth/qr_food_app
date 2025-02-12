'use server'

import { auth } from "@/app/auth";
import { db } from "@/db";
import { NextResponse } from "next/server";


// export async function createStoreCategory(storeId:string|string[]|undefined,categoryName:string){
//     if (!storeId || !categoryName) {
//          throw new Error("storeId and categoryName are required");
//       }
//      const storeIdStr = Array.isArray(storeId) ? storeId[0] : storeId;
    
     
//     try {
//        const response = await fetch('http://localhost:3000/api/create-category',{method:'POST',headers:{'Content-Type':'application/json'},
//         body: JSON.stringify({
//             storeIdStr,
//             categoryName
//         })
//     })

//     console.log(response,"ans");
    
//     // return response.json()
//     } catch (error) {
//         console.log(error);
        
//         throw new Error(`Failed to create category: ${error}`);
//     }

// }



export async function createStoreCategory(storeId:string|string[]|undefined,categoryName:string){

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
    
                const storeIdStr = Array.isArray(storeId) ? storeId[0] : storeId;
    
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

                    console.log(newCategory,"new kat");
                
                    return newCategory
        
                  }
            } catch (error) {
                console.log(error);
                
                return NextResponse.json(
                    { success: false,error: error },
                    { status: 500 } 
                  );
            }
           
}


export const getStoreCategory = async(storeId:string|string[]|undefined) => {
   try {

    const storeIdStr = Array.isArray(storeId) ? storeId[0] : storeId;

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

        const category = await db.category.findMany({
            where: {
                storeId: storeIdStr
            }
        })

        console.log("cat",category);
        
        return category;

        
     } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 404 });
    
     }

   } catch (error) {
    console.log(error,"error in get store category");
    
   }
}