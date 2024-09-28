const express = require("express")
const { gettodos, gettodo, addtodo, upadtetodo, removetodo } = require("../conrtoller/todocontroller")
const route = express.Router()



route.get("/",gettodos)

route.get("/:id",gettodo)

route.post("/",addtodo)

route.put("/:id",upadtetodo)

route.delete("/:id",removetodo)


module.exports = route