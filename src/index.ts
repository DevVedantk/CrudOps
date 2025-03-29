import express from 'express';
import os from 'os';
import { PrismaClient } from '@prisma/client';
const client=new PrismaClient();


export const app=express();

app.use(express.json());

app.get("/",async(req,res)=>{
    const data=await client.users.findMany({});
     
    res.json({
        message:"hello wolrd",
        data
    })
})

app.post("/signup",async(req,res)=>{
   try{ console.log(req);
    const {email,password}=req.body;

    await client.users.create({
        data:{
            email,
            password
        }
    })

    res.json({
        message:"signed upp!!"
    })}  catch(e){
        console.log(e)
    }
})

app.get("/host",(req,res)=>{
    res.send(os.hostname())
})


// app.listen(3000,()=>{
//     console.log("server started");
// })