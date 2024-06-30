import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma";


export default async function dbConnect(){
    
    try {
            await prisma.$connect();
    } catch (error) {
        console.log(error);
        throw new Error("Unable to Connect Database ")
    }
}