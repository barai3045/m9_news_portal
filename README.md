# 906 [Backend] Create JWF Token Helper

### https://www.npmjs.com/package/jose

`npm i jose`

```
JWT_SECRET="123-XYZ-ABC"
JWT_ISSUER="Localhost"
JWT_EXPIRATION_TIME="24h"
```

```
import { SignJWT, jwtVerify } from "jose";

export async function CreateToker(email, id){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const Payload={email:email, id:id};
    let token = await new SignJWT(Payload)
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setIssuedAt(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(secret)

    return token;
}
```


```
export async function VerifyToken(token){
    const secret=new TextEncoder().sncode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token, secret);
    return decoded['payload'];
}
```