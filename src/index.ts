import express from "express"
import { STATUS_CODES } from "http"


const app = express()

app.get("/", (req, res)=>{
    res.status(200).send("hello world")
})

app.listen(8080)