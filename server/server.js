import express from "express"
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const server = express()

server.get('/',(req,res)=>{
    res.json('hello sir ji')
})

server.listen(PORT,console.log('server is listening at:',PORT))