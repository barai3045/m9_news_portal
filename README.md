# 919 [API] News by Type Caegory Search Detais

## category
```
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {

        let {searchParams} = new URL(req.url);
        let catID = parseInt(searchParams.get('catID'))
        

        const prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
           where:{catID:catID},
           select:{id:true, title:true, short_des:true, img1:true, img2:true, img3:true, img4:true}
        })

        return NextResponse.json({status:"success", data:result})
    } catch(e) {
        return NextResponse.json({status:"fail", data:e})
    }
}
```
##  details
```
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {

        let {searchParams} = new URL(req.url);
        let id = parseInt(searchParams.get('id'))
        

        const prisma = new PrismaClient()
        const result = await prisma.news_list.findUnique({
           where:{id:id},
           include:{categories:true}
        })

        return NextResponse.json({status:"success", data:result})
    } catch(e) {
        return NextResponse.json({status:"fail", data:e})
    }
}
```

## search 

```
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {

        let {searchParams} = new URL(req.url);
        let keyword = searchParams.get('keyword')
        

        const prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
           where:{title:{contains:keyword}},
           select:{id:true, title:true, short_des:true, img1:true, img2:true, img3:true, img4:true}
        })

        return NextResponse.json({status:"success", data:result})
    } catch(e) {
        return NextResponse.json({status:"fail", data:e})
    }
}
```

## type 
```
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {

        let {searchParams} = new URL(req.url);
        let type = searchParams.get('type')
        

        const prisma = new PrismaClient()
        const result = await prisma.news_list.findMany({
           where:{type:type},
           select:{id:true, title:true, short_des:true, img1:true, img2:true, img3:true, img4:true}
        })

        return NextResponse.json({status:"success", data:result})
    } catch(e) {
        return NextResponse.json({status:"fail", data:e})
    }
}
```