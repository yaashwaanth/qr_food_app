'use server'

import { auth } from "@/app/auth"
import { db } from "@/db"
import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3"
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"

const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_KEY!
    }
})


const acceptedType = [
    "image/jpeg",
    "image/png",
    "image/jpg"
]

const maxFileSize = 1024 * 1024 * 10 // 10mb

export async function GetSignedUrl(storeName:string,storeLocation:string,type:string,size:number,checksum: string) {
    const session = await auth()
    if(!session){
        return {failure: "Not Authenticated"}
    }
    if(!acceptedType.includes(type)){
        return {failure: "Invalid types"}
    }

    if(size > maxFileSize){
        return {failure: "File too large"}
    }

    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key:`customer/logo/${storeName}-${storeLocation}`,
        ContentType: type,
        ContentLength: size,
        ChecksumSHA256: checksum,
        Metadata:{
            userId: session.user?.id!
        }

    }) 

    const signedUrl = await getSignedUrl(s3,command,{expiresIn:60})

    return {success:{url:signedUrl}}
}




// save store in database 

type FormData ={
    name:  string,
    tables: string,
    openingTime: string,
    closingTime: string,
    location:string,
    logo:string
}

export const CreateStore = async(formdata:FormData) => {
    const session = await auth()
    console.log(formdata,"session");

    
    if(!session){
        return {failure: "Not Authenticated"}
    }
    const email = session?.user?.email
    console.log(email,"email hai bhiay");
    

    const user = await db.user.findUnique({
        where:{
            email: email!
        }
    })

    console.log(user,"User form sesssion serace");
    

    try {
        const store = await db.store.create({
            data: {
                name: formdata.name,
                tables: Number(formdata.tables),
                location: formdata.location,
                openTime: formdata.openingTime,
                closingTime: formdata.closingTime,
                acceptingOrder : true,
                userId: user?.id,
                logo: formdata.logo,
            }
        })

        return {success:true,store}
        
    } catch (error) {  
        return {success:false}
    }


}