const mongoose = require("mongoose")



const todoschema = new mongoose.Schema({

    title : {
        type : String,
        required : true
    },

    description  : {
        type : String,
        required : true
    },

    ispublished : {
        type : Boolean,
        default : true
    },
},
{
    timestamps : true
})


module.exports = mongoose.model("todo", todoschema)