# 914 [API] Profile Details API


```
import { PrismaClient } from "@prisma/client";
import {headers} from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {

        const headersList = headers()
        let id = parseInt(headersList.get("id"));
        const prisma = new PrismaClient();
        const result = await prisma.users.findUnique({where:{id:id}})

        return NextResponse.json({status:"success", data: result })

    } catch(e){
        return NextResponse.json({status:"fail", data: e})
    }
}

```