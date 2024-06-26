```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}


model categories {
  id          Int     @id @default(autoincrement())
  name        String  @db.VarChar(100) @unique
  news_list   news_list[]
  createdAt   DateTime @default(now()) @db.Timestamp(0)
  updatedAt   DateTime @default(now()) @db.Timestamp(0) @updatedAt
}



model news_list {
  id          Int     @id @default(autoincrement())
  title       String  @db.VarChar(100)
  short_des   String  @db.VarChar(400)
  img1        String  @db.VarChar(300) 
  img2        String  @db.VarChar(300) 
  img3        String  @db.VarChar(300) 
  img4        String  @db.VarChar(300) 
  keywords    String  @db.VarChar(300)
  long_des    String  @db.LongText
  type        String  @db.VarChar(200)
  catID       Int
  comments    comments[]
  categories  categories @relation(fields:[catID], references: [id], onDelete: Restrict, onUpdate: Cascade)
  createdAt   DateTime @default(now()) @db.Timestamp(0)
  updatedAt   DateTime @default(now()) @db.Timestamp(0) @updatedAt
}



model users {
  id          Int     @id @default(autoincrement())
  firstName   String  @db.VarChar(50)
  lastName    String  @db.VarChar(50)
  email       String  @db.VarChar(50) @unique
  mobile      String  @db.VarChar(50)
  password    String  @db.VarChar(50)
  otp         String  @db.VarChar(10)
  comments    comments[]
  createdAt   DateTime @default(now()) @db.Timestamp(0)
  updatedAt   DateTime @default(now()) @db.Timestamp(0) @updatedAt
}

model comments {
  id            Int       @id @default(autoincrement())
  userID        Int
  postID        Int
  users         users     @relation(fields:[userID], references: [id], onDelete: Restrict, onUpdate: Cascade)
  news_list     news_list @relation(fields:[postID], references: [id], onDelete: Restrict, onUpdate: Cascade)
  descriptions  String    @db.VarChar(1000)
}


model socials {
  id          Int     @id @default(autoincrement())
  facebook    String  @db.VarChar(200)
  youtube     String  @db.VarChar(200)
  twitter     String  @db.VarChar(200)
  linkedin    String  @db.VarChar(200)
  about       String  @db.Text
  address     String  @db.Text
  createdAt   DateTime @default(now()) @db.Timestamp(0)
  updatedAt   DateTime @default(now()) @db.Timestamp(0) @updatedAt
}


model subscribers {
  id          Int       @id @default(autoincrement())
  email       String    @db.VarChar(200) @unique
  createdAt   DateTime  @default(now()) @db.Timestamp(0)
  updatedAt   DateTime  @default(now()) @db.Timestamp(0) @updatedAt
}


model policies {
  id          Int       @id @default(autoincrement())
  long_des    String    @db.LongText
  type        String    @db.VarChar(50)
}

```


## web
https://www.prisma.io/

## installation procedure
```
npm init -y
npm install prisma --save-dev
npx prisma init --datasource-provider mysql
```
### prisma extension for VS code need to isntall