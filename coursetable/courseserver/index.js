import express from "express"

import datas from "./data.js"
const app = express()

app.get("/",(req,res) =>{
    res.send("server")
})

app.get("/api/data",(req,res)=>{
    res.send(datas)
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server running');
    
})