import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";



export const NEXT_AUTH = {
    providers: [
        GoogleProvider({
             clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     // called when created
    //     jwt: ({token,user}) => {
    //          console.log(token,"user",user);
    //     },

    // },
    // pages: {
    //     signIn: "/auth"
    // }
}