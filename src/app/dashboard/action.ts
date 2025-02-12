import { db } from "@/db"



// data base
export const databaseUserQueryFunction = async(email: string) => {
    const user = await db.user.findUnique({
        where: {
            email
        },
        include: {
            store: true
        }
    })
    return user
}


