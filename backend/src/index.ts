import express from 'express';
import os from 'os';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
const client=new PrismaClient();


export const app=express();

app.use(express.json());
app.use(cors({
   origin:"http://localhost:5173",
   credentials:true  
}))


app.get("/data",async(req,res)=>{
    const data=await client.users.findMany({});
     
    res.json({
        message:"hello wolrd",
        data
    })
})

app.get("/testing",(req,res)=>{
    res.send("Testing route for CI CD")
})

app.get("/test",(req,res)=>{
    res.send("testing....")
})



app.post("/signup",async(req,res)=>{
   try{ 
    const {email,password}=req.body;
    console.log(password)
    console.log(email);

  const putIntoDB=await client.users.create({
        data:{
            email,
            password
        }
    })

    console.log(putIntoDB);

    res.json({
        putIntoDB,
        message:"signed upp!!"
    })}  catch(e){
        console.log(e)
    }
})

app.get("/host",(req,res)=>{
    res.send(os.hostname())
})


app.listen(3000,()=>{
    console.log("server started");
})