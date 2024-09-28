const mongoose = require("mongoose")

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`db connection success ${conn.connection.name}`)
    } catch (error) {
        console.log("db connection failed",error.message)
    }
}
module.exports = connectdb