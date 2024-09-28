const expressAsyncHandler = require("express-async-handler")
const todo = require("../schema/todoschema")





const gettodos = expressAsyncHandler(async(req,res)=>{
   const GETTODOS = await todo.find()
   if(!GETTODOS){
    res.status(404)
    throw new Error("todo not found")
   }

   res.json(GETTODOS)
})

const gettodo = expressAsyncHandler(async(req,res)=>{
    const GETTODO = await todo.findById(req.params.id)
   if(!GETTODO){
    res.status(404)
    throw new Error("todo not found")
   }

   res.json(GETTODO)
})

const addtodo =  expressAsyncHandler(async(req,res)=>{
 const {title, description} = req.body
 if(!title || !description){
    res.status(401)
    throw new Error("please fill all details")
 }
const add = await todo.create({
    title, description
})
    if(!add){
        res.status(401)
        throw new Error("todo not created")
    }
 res.json(add)
})


const upadtetodo =  expressAsyncHandler(async(req,res)=>{
 const update = await todo.findByIdAndUpdate(req.params.id, req.body, {new : true})
 if(!update){
    res.status(401)
    throw new Error("todo not updated")
 }
 res.json(update)
})


const removetodo =  expressAsyncHandler(async(req,res)=>{
   const deletetodo = await todo.findByIdAndDelete(req.params.id)
   if(!deletetodo){
    res.status(401)
    throw new Error("todo not deleted")
   }
   res.json({
    msg : "todo deleted"
   })
})

module.exports = {gettodos, gettodo, addtodo, upadtetodo, removetodo}