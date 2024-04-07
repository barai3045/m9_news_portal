# 910 [API] Verify Email Ulility


```
import { SendMail } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {
        const prisma = new PrismaClient();

        let  {searchParams} = new URL(req.url);
        let email= searchParams.get('email');

        //user count
        const count = await prisma.users.count({where: {email:email}});

        if(count===1){
            
            let code = Math.floor(100000+Math.random()*900000);
            let EmailText = `Your OTP Code is = ${code}`
            let EmailSubject = "Next News Verification Code";
            await SendMail(email, EmailText, EmailSubject);

            let result = await prisma.users.update({
                where:{email:email},
                data:{otp:code.toString()}
            })

            return NextResponse.json({status:"success", data:result})

        } else {
            return NextResponse.json({status:"fail", data:"No user found"})
        }

    }
    catch (e) {
        return NextResponse.json({status:"fail1", data:e})
    }
}
```