const express = require('express')
const app = express()

const port = 8000

// สร้าง path ชื่อ test 
app.get('/test',(req,res)=>(
    res.send("Hello world")
))

app.get('/test2',(req,res)=>{
    let user = {
        firstname : "สมศรี",
        lastname : "สมชาย",
        age : "52",
        gender : "หญิง"
    }
    res.json(user)
})


app.listen(port,(req,res)=>{
    console.log('http server run at',port)
})