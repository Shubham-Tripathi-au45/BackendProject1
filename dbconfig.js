const mongoose = require("mongoose")
async function initDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{dbName:"Project"})
        console.log("connected to db")
    }
    catch(err){
        console.log("error connectiong to db")
    }
}
module.exports = {initDB}