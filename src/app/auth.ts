import { db } from "@/db";
import { useToast } from "@/hooks/use-toast"
import { toastHelper } from "@/lib/toastHelper";

import { createClient } from "@/utils/supabase/server";
import { data } from "motion/react-client";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider ({
        clientId: process.env.GOOGLE_ID || "",
        clientSecret: process.env.GOOGLE_SECRET || ""
    })
  ],
  debug:true,
  callbacks:{
    // after signin has happened , before letting the user know they have signed in 
  
      signIn: async ({ user }) => {
        try {

          const existingUser = await db.user.findUnique({
            where : {
              email :  user?.email!
            }
          })
          console.log("exisiting user", existingUser);
          
          if(!existingUser){
            const newUser = await db.user.create({
              data: {
                name: user.name!,
                email: user.email!
              }
            })


          console.log(newUser,"stored in db");

          }



          
          return true
          
        } catch (error) {
          return false
          
        }
      }

   
},
pages:{
  signIn: '/signup'
}
 
})
