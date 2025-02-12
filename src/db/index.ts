// import {PrismaClient} from '@prisma/client'

// declare global {
//     var cachedPrisma: PrismaClient
// }

// let prisma: PrismaClient
// if(process.env.NODE_ENV === 'production'){
//     prisma = new PrismaClient()
// }else{
//     // Handling Development Envrionmement
//     if(!global.cachedPrisma){
//         global.cachedPrisma = new PrismaClient()
//     }

//     prisma = global.cachedPrisma
// }

// export const db = prisma;

// lib/db.ts (or wherever you initialize Prisma)
import { PrismaClient } from '@prisma/client';

// Use a global variable to cache the Prisma client
const prismaGlobal = global as typeof globalThis & {
  prisma?: PrismaClient;
};

// Initialize the Prisma client
export const db: PrismaClient =
  prismaGlobal.prisma ||
  (() => {
    const client = new PrismaClient();
    if (process.env.NODE_ENV !== 'production') {
      prismaGlobal.prisma = client; // Store in global scope for dev
    }
    return client;
  })();
