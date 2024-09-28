const express = require("express")
const connectdb = require("./config/dbconfig")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8080


connectdb()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/", (req,res)=>{
    res.send("welcome to todo api 1.0")
})

app.use("/api/todo", require("./route/todoroute"))

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`)
})


