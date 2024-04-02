# 5 [Backend] Create Registration

```
export async function POST(req, res){
    try {

        let reqBody = await req.json();
        reqBody.otp ="0";
        const prisma = new PrismaClient()
        const result = await prisma.users.create({
            data:reqBody
        })

        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}
```

``` request header

POST:  http://localhost:3000/api/user/registration
```

```postman reqbody
{
    "firstName": "Santosh",
    "lastName":"barai",    
    "email":"barai3022@gmail.com",
    "mobile": "01723000008",
    "password":"123456" 
}
```


```postman response
{
    "status": "success",
    "data": {
        "id": 1,
        "firstName": "Santosh",
        "lastName": "barai",
        "email": "barai3022@gmail.com",
        "mobile": "01723000008",
        "password": "123456",
        "otp": "0",
        "createdAt": "2024-04-02T05:12:54.000Z",
        "updatedAt": "2024-04-02T05:12:54.000Z"
    }
}
```